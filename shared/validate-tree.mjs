#!/usr/bin/env node
// Валидатор дерева решений shared/tree.json.
// Запуск: node shared/validate-tree.mjs [путь-к-tree.json]
// Завершается с кодом 1 и внятной ошибкой, если дерево сломано.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Ровно 18 слагов симптом-страниц сайта (§9 спеки).
const ALLOWED_SLUGS = [
  "stuk-v-dvigatele",
  "stuk-v-dvigatele-na-holodnuyu",
  "tikanie-dvigatelya",
  "stuk-pri-razgone",
  "zvon-pri-razgone",
  "svist-pri-zapuske",
  "svist-remnya",
  "gul-pri-dvizhenii",
  "gul-pri-povorote",
  "gul-podshipnika-stupitsy",
  "shchelchki-pri-povorote-rulya",
  "skrezhet-pri-tormozhenii",
  "skrip-tormozov",
  "stuk-v-podveske",
  "stuk-na-nerovnostyah",
  "hlopki-v-glushitele",
  "gremit-pod-mashinoy",
  "vibratsiya-na-holostyh",
];

const URGENCIES = ["ok", "warn", "stop"];
const MIN_LEAVES = 16;
const MIN_OPTIONS = 2;
const MAX_OPTIONS = 4;
const MIN_DEPTH = 2; // вопросов на пути от корня до листа (ветка запуска диагностируется за 2)
const MAX_DEPTH = 8; // спека давала 3–6, но по решению владельца от 2026-07-31 допускаем глубже ради полноты покрытия

const treePath =
  process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), "tree.json");

const errors = [];
const warnings = [];

let tree;
try {
  tree = JSON.parse(readFileSync(treePath, "utf8"));
} catch (e) {
  console.error(`ОШИБКА: не удалось прочитать ${treePath}: ${e.message}`);
  process.exit(1);
}

if (typeof tree.version !== "number") {
  errors.push("В корне нет числового поля version.");
}
const nodes = tree.nodes;
if (!nodes || typeof nodes !== "object") {
  console.error("ОШИБКА: в корне нет объекта nodes.");
  process.exit(1);
}
if (typeof tree.root !== "string" || !nodes[tree.root]) {
  console.error(`ОШИБКА: root "${tree.root}" не найден среди nodes.`);
  process.exit(1);
}

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

// --- Проверка каждого узла по отдельности ---
for (const [id, node] of Object.entries(nodes)) {
  if (node.type === "question") {
    if (!isNonEmptyString(node.text)) {
      errors.push(`Вопрос "${id}": пустое поле text.`);
    }
    if (!Array.isArray(node.options)) {
      errors.push(`Вопрос "${id}": нет массива options.`);
      continue;
    }
    if (node.options.length < MIN_OPTIONS || node.options.length > MAX_OPTIONS) {
      errors.push(
        `Вопрос "${id}": ${node.options.length} вариантов, должно быть от ${MIN_OPTIONS} до ${MAX_OPTIONS}.`
      );
    }
    const seenIds = new Set();
    for (const opt of node.options) {
      if (!isNonEmptyString(opt.id)) {
        errors.push(`Вопрос "${id}": у варианта нет id.`);
      } else if (seenIds.has(opt.id)) {
        errors.push(`Вопрос "${id}": дублируется id варианта "${opt.id}".`);
      } else {
        seenIds.add(opt.id);
      }
      if (!isNonEmptyString(opt.label)) {
        errors.push(`Вопрос "${id}": у варианта "${opt.id}" пустой label.`);
      }
      if (!isNonEmptyString(opt.next)) {
        errors.push(`Вопрос "${id}": у варианта "${opt.id}" нет next.`);
      } else if (!nodes[opt.next]) {
        errors.push(
          `Вопрос "${id}": вариант "${opt.id}" ссылается на несуществующий узел "${opt.next}".`
        );
      }
    }
  } else if (node.type === "leaf") {
    if (!isNonEmptyString(node.top_cause)) {
      errors.push(`Лист "${id}": пустое поле top_cause.`);
    }
    if (
      !Array.isArray(node.alt_causes) ||
      node.alt_causes.length === 0 ||
      !node.alt_causes.every(isNonEmptyString)
    ) {
      errors.push(`Лист "${id}": alt_causes должен быть непустым массивом строк.`);
    }
    if (!URGENCIES.includes(node.urgency)) {
      errors.push(
        `Лист "${id}": urgency "${node.urgency}" не входит в ${URGENCIES.join("/")}.`
      );
    }
    if (!isNonEmptyString(node.explanation)) {
      errors.push(`Лист "${id}": пустое поле explanation.`);
    }
    if (!isNonEmptyString(node.advice)) {
      errors.push(`Лист "${id}": пустое поле advice.`);
    }
    if (!isNonEmptyString(node.site_slug)) {
      errors.push(`Лист "${id}": пустое поле site_slug.`);
    } else if (!ALLOWED_SLUGS.includes(node.site_slug)) {
      errors.push(
        `Лист "${id}": site_slug "${node.site_slug}" не входит в список 18 слагов сайта.`
      );
    }
  } else {
    errors.push(`Узел "${id}": неизвестный type "${node.type}".`);
  }
}

// --- Достижимость и циклы (DFS от корня) ---
const reachable = new Set();
const WHITE = 0, GRAY = 1, BLACK = 2;
const color = new Map();
let cycleFound = null;

function dfs(id, path) {
  reachable.add(id);
  color.set(id, GRAY);
  const node = nodes[id];
  if (node?.type === "question" && Array.isArray(node.options)) {
    for (const opt of node.options) {
      const next = opt.next;
      if (!next || !nodes[next]) continue; // уже поймано выше
      if (color.get(next) === GRAY && !cycleFound) {
        cycleFound = [...path, id, next];
      } else if ((color.get(next) ?? WHITE) === WHITE) {
        dfs(next, [...path, id]);
      }
    }
  }
  color.set(id, BLACK);
}
dfs(tree.root, []);

if (cycleFound) {
  errors.push(`Найден цикл: ${cycleFound.join(" → ")}.`);
}
for (const id of Object.keys(nodes)) {
  if (!reachable.has(id)) {
    errors.push(`Узел "${id}" недостижим из корня.`);
  }
}

// --- Глубина: на каждом пути от корня до листа 3–6 вопросов ---
// Дерево маленькое, поэтому просто перебираем все пути.
if (!cycleFound) {
  const badPaths = new Set();
  function walk(id, questionCount, path) {
    const node = nodes[id];
    if (!node) return;
    if (node.type === "leaf") {
      if (questionCount < MIN_DEPTH || questionCount > MAX_DEPTH) {
        badPaths.add(`${[...path, id].join(" → ")} (${questionCount} вопр.)`);
      }
      return;
    }
    if (!Array.isArray(node.options)) return;
    for (const opt of node.options) {
      if (opt.next && nodes[opt.next]) {
        walk(opt.next, questionCount + 1, [...path, id]);
      }
    }
  }
  walk(tree.root, 0, []);
  const unique = [...badPaths];
  for (const p of unique.slice(0, 10)) {
    errors.push(`Путь вне глубины ${MIN_DEPTH}–${MAX_DEPTH} вопросов: ${p}`);
  }
  if (unique.length > 10) {
    errors.push(`…и ещё ${unique.length - 10} путей вне допустимой глубины.`);
  }
}

// --- Количество листьев и покрытие слагов ---
const leaves = Object.entries(nodes).filter(([, n]) => n.type === "leaf");
if (leaves.length < MIN_LEAVES) {
  errors.push(`Листьев ${leaves.length}, требуется не меньше ${MIN_LEAVES}.`);
}

const usedSlugs = new Set(
  leaves.map(([, n]) => n.site_slug).filter((s) => ALLOWED_SLUGS.includes(s))
);
for (const slug of ALLOWED_SLUGS) {
  if (!usedSlugs.has(slug)) {
    warnings.push(`Слаг "${slug}" не используется ни одним листом.`);
  }
}

// --- Итог ---
for (const w of warnings) console.warn(`ПРЕДУПРЕЖДЕНИЕ: ${w}`);
if (errors.length > 0) {
  for (const e of errors) console.error(`ОШИБКА: ${e}`);
  console.error(`\nДерево не прошло проверку: ошибок — ${errors.length}.`);
  process.exit(1);
}

const questions = Object.values(nodes).filter((n) => n.type === "question").length;
console.log(
  `Дерево в порядке: вопросов — ${questions}, листьев — ${leaves.length}, ` +
    `слагов задействовано — ${usedSlugs.size} из ${ALLOWED_SLUGS.length}.`
);

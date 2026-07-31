#!/usr/bin/env node
// Печатает дерево решений в виде текстового outline для ревью.
// Запуск: node shared/outline-tree.mjs [путь-к-tree.json]

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const treePath =
  process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), "tree.json");
const tree = JSON.parse(readFileSync(treePath, "utf8"));
const nodes = tree.nodes;

const URGENCY_LABEL = {
  ok: "🟢 можно ехать",
  warn: "🟡 в сервис на неделе",
  stop: "🔴 остановиться",
};

const printedQuestions = new Set();

function printNode(id, indent) {
  const pad = "  ".repeat(indent);
  const node = nodes[id];
  if (!node) {
    console.log(`${pad}!! узел "${id}" не найден`);
    return;
  }
  if (node.type === "leaf") {
    console.log(
      `${pad}▸ ЛИСТ ${id}: ${node.top_cause} [${URGENCY_LABEL[node.urgency] ?? node.urgency}] (стр.: ${node.site_slug})`
    );
    console.log(`${pad}    альтернативы: ${node.alt_causes.join(", ")}`);
    return;
  }
  if (printedQuestions.has(id)) {
    console.log(`${pad}Q ${id} — см. выше (узел переиспользуется)`);
    return;
  }
  printedQuestions.add(id);
  console.log(`${pad}Q ${id}: ${node.text}`);
  for (const opt of node.options) {
    console.log(`${pad}  • ${opt.label}`);
    printNode(opt.next, indent + 2);
  }
}

console.log(`Дерево решений «Стук», версия ${tree.version}\n`);
printNode(tree.root, 0);

/**
 * /sitemap.xml как копия сгенерированного индекса.
 *
 * Роботы, которые не читают robots.txt, стучатся по /sitemap.xml вслепую.
 * Раньше там лежал файл, написанный руками: он перечислял sitemap-0.xml и
 * разошёлся бы с реальностью в тот день, когда адресов станет больше 45 000
 * и Astro добавит sitemap-1.xml. Копируем индекс после сборки — расходиться
 * нечему.
 */
import { copyFileSync, existsSync } from 'node:fs';

const src = 'dist/sitemap-index.xml';
const dst = 'dist/sitemap.xml';

if (!existsSync(src)) {
  console.error(`Нет ${src}: интеграция sitemap не отработала.`);
  process.exit(1);
}

copyFileSync(src, dst);
console.log('/sitemap.xml — копия sitemap-index.xml.');

import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

/**
 * Версионирование статики по содержимому: /shemy/x.svg → /shemy/x.svg?v=ab12cd34.
 * Меняется файл — меняется URL, и CDN отдаёт новую версию без ручного сброса кэша.
 * Хэш считается один раз на сборку.
 */
const cache = new Map<string, string>();

export function v(publicPath: string): string {
  let hash = cache.get(publicPath);
  if (!hash) {
    try {
      const buf = readFileSync(`./public${publicPath}`);
      hash = createHash('md5').update(buf).digest('hex').slice(0, 8);
    } catch {
      hash = 'x';
    }
    cache.set(publicPath, hash);
  }
  return `${publicPath}?v=${hash}`;
}

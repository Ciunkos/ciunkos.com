/* daty.mjs: prawdziwe daty treści z gita, tylko w buildzie (node:child_process).
   Oryginał: ~/hire/src/data/daty.mjs, kopie w innych repo jako src/shared/daty.mjs.
   Data zmiany = ostatni commit, który dotknął plików z treścią strony, a nie dzień
   builda. Plik niezacommitowany (świeża zmiana) = dziś, bo treść naprawdę jest nowa. */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const cache = new Map();
const git = (args) => { try { return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } };
const dzis = () => new Date().toISOString().slice(0, 10);

function brudny(pliki) { return git(['status', '--porcelain', '--', ...pliki]) !== ''; }

/** Ostatnia zmiana treści (YYYY-MM-DD) dla listy plików/katalogów. */
export function zmiana(...pliki) {
  const p = pliki.flat().filter((f) => f && existsSync(f));
  if (!p.length) return null;
  const k = 'z:' + p.join('|');
  if (!cache.has(k)) cache.set(k, brudny(p) ? dzis() : (git(['log', '-1', '--format=%cs', '--', ...p]) || null));
  return cache.get(k);
}

/** Pierwsze pojawienie się treści (YYYY-MM-DD), po zmianach nazw pliku. */
export function publikacja(plik) {
  if (!plik || !existsSync(plik)) return null;
  const k = 'p:' + plik;
  if (!cache.has(k)) { const l = git(['log', '--follow', '--diff-filter=A', '--format=%cs', '--', plik]).split('\n').filter(Boolean); cache.set(k, l[l.length - 1] || null); }
  return cache.get(k);
}

/** Najpóźniejsza z dat (ISO), puste pomija. */
export const najpozniej = (...d) => d.flat().filter(Boolean).sort().pop() || null;

import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// BASE_PATH lets the same build run at the domain root ("/") or in a
// subfolder such as GitHub Pages' "/phanavigator/". SITE_URL is used for
// canonical and social-sharing links.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || undefined;

/**
 * Lets content editors write links in Markdown as "/what-is-ph/" and have
 * them work wherever the site is hosted: after the build, any link that
 * starts with "/" but not with the base path gets the base path added.
 */
function baseAwareLinks() {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'base-aware-links',
    hooks: {
      /** @param {{ dir: URL }} options */
      'astro:build:done': async ({ dir }) => {
        if (!prefix) return;
        const root = fileURLToPath(dir);
        /** @param {string} folder @returns {Promise<string[]>} */
        const htmlFiles = async (folder) => {
          const entries = await readdir(folder, { withFileTypes: true });
          const nested = await Promise.all(
            entries.map((e) =>
              e.isDirectory() ? htmlFiles(join(folder, e.name)) : e.name.endsWith('.html') ? [join(folder, e.name)] : [],
            ),
          );
          return nested.flat();
        };
        for (const file of await htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          const updated = html.replace(/(<a\b[^>]*?\shref=")(\/(?!\/)[^"]*)"/g, (match, start, href) =>
            href === prefix || href.startsWith(`${prefix}/`) ? match : `${start}${prefix}${href}"`,
          );
          if (updated !== html) await writeFile(file, updated);
        }
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [baseAwareLinks()],
});

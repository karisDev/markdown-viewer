import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroRehypeRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  output: "static",
  markdown: {
    rehypePlugins: [[astroRehypeRelativeMarkdownLinks, {
      contentPath: "src/content/md",
      collectionPathMode: "root"
    }]]
  }
});
import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import astroRehypeRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';
import { remarkFixIndex } from './plugins/remarkFixIndex.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      optimize: true
    }),
    tailwind({
      applyBaseStyles: false
    })
  ],
  image: {
    service: sharpImageService(),
  },
  markdown: {
    rehypePlugins: [[astroRehypeRelativeMarkdownLinks, {
      contentPath: "src/content/md",
      collectionPathMode: "root"
    }]],
    remarkPlugins: [remarkFixIndex]
  },
  mdx: {
    remarkPlugins: [remarkFixIndex]
  }
});
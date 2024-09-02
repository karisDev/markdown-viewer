import { defineCollection } from "astro:content";

export const mdCollection = defineCollection({
	type: "content",
});

export const collections = {
  md: mdCollection,
};
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../data/site";
import { getWritingPosts } from "../lib/writing";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error("Site URL must be set in astro.config.mjs");
  }

  const posts = await getWritingPosts();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.excerpt,
      link: `/writing/${post.id}`,
    })),
  });
}

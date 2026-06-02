import { getCollection, type CollectionEntry } from "astro:content";

export async function getWritingPosts() {
  const posts = await getCollection("writing");
  posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
  return posts;
}

type Category = CollectionEntry<"writing">["data"]["category"];

const CATEGORY_LABELS: Record<Category, string> = {
  "software-engineering": "Software Engineering",
  "health-and-fitness": "Health & Fitness",
};

export function categoryLabel(category: Category): string {
  return CATEGORY_LABELS[category];
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

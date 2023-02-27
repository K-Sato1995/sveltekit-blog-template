import { data } from "$data/posts.json";

export function load() {
  return { body: { posts: data } };
}

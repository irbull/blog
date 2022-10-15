import { Post } from "../utils/posts.ts";

export function PostPreview(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a
        href={`/blog/${post.slug}`}
        class="py-12 group grid sm:grid-cols-3 text-black align-text-bottom"
      >
        <time>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="sm:col-span-2 flex items-center">
          <div class="text-2xl font-bold align-middle group-hover:underline">
            {post.title}
          </div>
        </div>
      </a>
    </li>
  );
}

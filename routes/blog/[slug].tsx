import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import { Header } from "../../components/Header.tsx";
import { ServerCodePage } from "../_404.tsx";
import { asset } from "$fresh/runtime.ts";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";

interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { post } = props.data;
  return post
    ? (
      <>
        <Header />
        <img
          src={asset(post.heroImage)}
          class="fade-in-image hero-image"
          style="width: 100vw; height: 320px; margin-top: 2rem; margin-bottom: 2rem;  object-position: center; object-fit:cover; filter: grayscale(100%); -webkit-filter: grayscale(100%);"
        />
        <Container>
          <div class="text-center">
            <time class="inline-block mt-4 text-gray-400 pt-4">
              {new Date(post.publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 class="font-bold text-5xl pt-6 pb-4">{post.title}</h1>
            <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
            <link rel="stylesheet" href={asset("/main.css")} />
          </div>
          <hr />
          <article
            class="mt-12 markdown-body"
            dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
          />
        </Container>
      </>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"Page not found."}
      />
    );
}

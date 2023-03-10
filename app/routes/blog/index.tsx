import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { marked } from "marked";
import { Post } from "~/components/post";
import { getLatestPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  const post = await getLatestPost();
  //invariant(post, `Post not found`);
  if (!post) {
    return json({ post: null, html: null }, { status: 404 });
  }

  const html = marked(post.markdown);
  return json({ post, html });
};

export default function Index() {
  const { post, html } = useLoaderData<typeof loader>();
  if (post === null) return <h1>Not Found</h1>;

  return (
    <main>
      <p className="py-9 px-3 text-2xl">
        Hello, my name is John. This is my setion of the web.{" "}
        <Link to="posts" className="text-xl text-blue-600 underline">
          You can view previous posts
        </Link>
      </p>
      {/* Show the latest post */}
      <Post html={html} title={post.title} date={post.createdAt}></Post>
    </main>
  );
}

import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { getLatestPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {

  const post = await getLatestPost();
  invariant(post, `Post not found`);

  const html = marked(post.markdown);
  return json({ post, html });
};

export default function Index() {
  const { post, html } = useLoaderData<typeof loader>();
  return (
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <p>Hello this is my setion of the web.  You can view previos posts here:  <Link to="/posts" className="text-xl text-blue-600 underline"> Blog Posts</Link>
        </p>
        {/* Show the latest post */}
        <div className="border-4 border-dashed border-gray-200  rounded-lg ">
          <h1 className="my-6 border-b-2 text-center text-3xl">
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>

  );
}

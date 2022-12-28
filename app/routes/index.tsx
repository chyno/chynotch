import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
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
  return (<>
    {/*  Create a tailwind blog for John Chynoweth email jwchynoweth@gmail */}

    {/* Create Header tag */}
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">
          John Chynoweth
        </h1>
      </div>
    </header>
    {/* Create Main content */}
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Show the latest post */}
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <h1 className="my-6 border-b-2 text-center text-3xl">
              {post.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </main>
    {/* Create the footer */}
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex items-center justify-center text-sm text-white">
          <div className="ml-6">
            <p className="text-base leading-6 text-gray-400">
              &copy; 2022 John Chynoweth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
}

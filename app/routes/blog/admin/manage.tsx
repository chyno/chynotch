import type { Post } from "@prisma/client";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { deletePost, getPosts } from "~/models/post.server";
import { getSession, USER_SESSION_KEY } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  if (!session || !session.get(USER_SESSION_KEY)) {
    return redirect("/");
  }

  return json({ posts: await getPosts(), user });
};

// Note the "action" export name, this will handle our form POST
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  if (!formData.get("slug")) {
    return json({ error: "Missing slug" }, { status: 400 });
  }

  await deletePost(formData.get("slug") as string);
};

export default function PostAdmin() {
  const { posts, user } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin for {user ? user?.email : "unknown"}
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {posts.map((post: Post) => (
              <li key={post.slug}>
                <Link to={post.slug} className="text-blue-600 underline">
                  {" "}
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

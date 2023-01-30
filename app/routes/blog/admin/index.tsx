import { ActionArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import { getSession, logout, USER_SESSION_KEY } from "~/session.server";

export async function action({ request }: ActionArgs) {
  //const session = await getSession(request);
  //const isAdmin = location.pathname.includes("admin");
  return logout(request);
}
export  async function loader({ request }: ActionArgs)  {
  const session = await getSession(request);
  if (!session || ! session.get(USER_SESSION_KEY)) {
    return redirect("/");
  }

  return json({ posts: await getPosts() });

};

export default function AdminIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-3 space-y-3">
      <div>
        <Link to="new" className="text-blue-600 underline">
          Create a New Post
        </Link>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
            {/* show post date format in mm/dd/yy format */}
            <span className="ml-2 pl-2 text-gray-500">{post.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

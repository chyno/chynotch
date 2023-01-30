import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
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

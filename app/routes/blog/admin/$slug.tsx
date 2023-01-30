import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { deletePost, getPost } from "~/models/post.server";
import { getSession, USER_SESSION_KEY } from "~/session.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json({ post, html });
};

// Note the "action" export name, this will handle our form POST
export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request);
  if (!session || ! session.get(USER_SESSION_KEY)) {
    return redirect("/");
  }
  const formData = await request.formData();
  await deletePost(formData.get("slug") as string);
  return redirect(`/blog/admin`);
};
export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <Form method="post">
        <input type="hidden" value={post.slug} name="slug" id="slug" />
        <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <button
          type="submit"
          className="ml-4 bg-blue-500  py-2 px-4 align-middle text-white"
        >
          Delete
        </button>
      </Form>
    </main>
  );
}

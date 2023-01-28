import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Chynoweth Blog",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-base">
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <Header></Header>
          <div className="lg:grid lg:grid-cols-[1fr_1700px_1fr]">
            <div className="bg-gray-100"></div>
            <div>
              <Outlet />
            </div>
            <div className="bg-gray-100"></div>
          </div>

          <Footer></Footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
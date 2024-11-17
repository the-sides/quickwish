import { type PageProps } from "$fresh/server.ts";
import NameModal from "../components/NameModal.tsx";

export default function App({ Component, state }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>QuickWish</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="pt-12 flex min-h-screen" style="background: linear-gradient(15deg, #142850, #14365f, #13476f, #125d80, #107792, #0d96a5, #09b8b4, #04ccb1)">
        <header class="fixed top-0 w-full text-white">
          <nav class="flex items-center p-3 relative">
            <img src="/logo.svg" alt="QuickWish logo" class="h-8 mr-4" />
            <a href="/">Home</a>
            <p className="ml-auto">Viewing as {state.name}</p>
            <div className="bg -z-10 absolute inset-0 scale-125 h-full w-full bg-slate-700 bg-opacity-75 blur-lg"></div>
          </nav>
        </header>
        <Component />
        {!state.name && <NameModal existingName={state.name as string} />}
      </body>
    </html>
  );
}

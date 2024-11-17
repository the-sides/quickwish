import { type PageProps } from "$fresh/server.ts";
export default function App({ Component, state }: PageProps) {
  console.log(state);
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>QuickWish</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}

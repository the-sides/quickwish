import { useSignal } from "@preact/signals";
import NameModal from "../islands/NameModal.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    console.log('State from index.tsx:', ctx.state.name);
    return ctx.render(ctx.state);
  },
};

export default function Home({ data }: PageProps) {
  const name = useSignal(data.name as string);
  return (
    <div class="px-4 py-8 mx-auto  bg-[#3c704f] min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        hello {data.name as string}
        <NameModal existingName={name} />
      </div>
    </div>
  );
}

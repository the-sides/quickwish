import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getLists } from "../lib/lists.ts";

export const handler = async (_req: Request, ctx: FreshContext) => {
  console.log("State from index.tsx:", ctx.state.name);
  const lists = await getLists();
  return ctx.render({ ...ctx.state, lists });
};

export default function Home({ data }: PageProps) {
  const slugName = data.name.replace(/\s+/g, "-").toLowerCase();
  return (
    <main class={"flex-1 min-h-full"}>
      <div class="px-4 py-8 mx-auto text-white text-xl">
        <a href={"list/" + slugName} className="">View Personal List</a>
        <p>Lists:</p>
        <div className="pl-4">
          {data.lists.map(list => <a href={'/list/'+list} class="block text-lg underline">{list}</a>)}
        </div>
      </div>
    </main>
  );
}

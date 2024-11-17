import { FreshContext, PageProps } from "$fresh/server.ts";
import { getList } from "../../lib/lists.ts";
import ItemAdder from "../../islands/ItemAdder.tsx";
import ListItem from "../../components/ListItem.tsx";

export const handler = async (_req: Request, ctx: FreshContext) => {
  const name = ctx.params.name;
  const list = await getList(name);
  // console.log(name, list);
  return ctx.render({ ...ctx.state, list });
};

export default function List({ params, data }: PageProps) {
  return (
    <div
      class={"max-w-screen-md w-full flex flex-col items-center mx-auto py-8 px-6 text-white"}
    >
      <div className="w-full">
        <a href="/" className="text-xl capitalize">← Back to lists</a>
      </div>
      <h1 class="text-3xl bold capitalize">{params.name}'s wish list</h1>
      <div className="mt-8 pl-4">
        {data.list.items.map((item) => (
          <ListItem name={params.name} item={item} />
        ))}
        {data.name?.toLowerCase() === data.list.user && (
          <ItemAdder listName={params.name} />
        )}
      </div>
    </div>
  );
}

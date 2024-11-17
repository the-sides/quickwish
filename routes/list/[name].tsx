import { FreshContext, PageProps } from "$fresh/server.ts";
import { getList } from "../../lib/lists.ts";
import ItemAdder from "../../islands/ItemAdder.tsx";

export const handler = async (_req: Request, ctx: FreshContext) => {
    const name = ctx.params.name;
    const list = await getList(name);
    console.log(name, list);
    return ctx.render({ ...ctx.data, list });
}

export default function List({ params, data }: PageProps) {
    return (
        <div class={'py-8 px-6 text-white'}>
            <h1 class="text-xl capitalize">{params.name}'s wish list</h1>
            <div className="pl-4">
                {data.list.items.map(item => <p class="text-lg">{item}</p>)}
                <ItemAdder listName={params.name} />
            </div>
        </div>
    )
}
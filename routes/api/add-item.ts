import { FreshContext } from "$fresh/server.ts";
import { addItem } from "../../lib/lists.ts";

export const handler = async (req: Request, _ctx: FreshContext): Promise<Response> => {
  const body = await req.json();
  const item = body.item ?? '';
  const listName = body.listName ?? '';
  try {
    addItem(listName, item);
    return new Response('Success');
  } catch (e) {
    console.error(e);
    throw new Error('Failed to add item');
  }
};

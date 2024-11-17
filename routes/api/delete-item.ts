import { deleteItem } from "../../lib/lists.ts";

export const handler = async (req: Request): Promise<Response> => {
  const body = await req.json();
  const item = body.item ?? "";
  const listName = body.listName ?? "";
  try {
    deleteItem(listName, item);
    return new Response("Success");
  } catch (e) {
    console.error(e);
    throw new Error("Failed to delete item");
  }
};

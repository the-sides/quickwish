/// <reference lib="deno.unstable" />
const kv = await Deno.openKv();

const createSlugName = (name: string) =>
  name.toLowerCase().replaceAll(" ", "-");

export async function getList(slugName: string) {
  let list = await kv.get(["lists", slugName]);
  if (list.value === null) {
    const value = await createList(slugName);
    return value;
  }

  return list.value;
}

export async function getLists() {
  const listReqs = kv.list({ prefix: ["lists"] });
  const lists = [];
  for await (const list of listReqs) {
    lists.push(list);
  }
  return lists.map((list) => list.value.name);
}

export async function createList(name: string) {
  console.log("Creating list", name);
  const slugName = createSlugName(name);
  const key = ["lists", slugName];
  const value = { user: slugName, name, items: [] };
  await kv.set(key, value);
  return value;
}

export async function addItem(listName: string, item: string) {
  const list = await getList(listName);
  console.log("Adding item to list:", listName, item, list);
  list.items.push(item);
  const setVal = await kv.set(["lists", listName], list);
  console.log("Set value:", setVal);
}

export async function deleteItem(listName: string, item: string) {
  const list = await getList(listName);
  console.log("Deleting item from list:", listName, item, list);
  list.items = list.items.filter((i) => i !== item);
  const setVal = await kv.set(["lists", listName], list);
  console.log("Set value:", setVal);
}

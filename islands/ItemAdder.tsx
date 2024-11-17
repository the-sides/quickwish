import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import ListItem from "../components/ListItem.tsx";

export default function ItemAdder({ listName }: { listName: string }) {
  const items = useSignal([]);
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // Clear the input field
    const item = formData.get("add-item") as string;
    form.reset();
    items.value = [...items.value, item];
    fetch("/api/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listName, item }),
    });
  };
  return (
    <>
      {items.value.map((item) => <ListItem name={listName} item={item} />)}
      <form onSubmit={handleSubmit} className="mt-4 flex gap-3 text-black ">
        <input
          type="text"
          placeholder="Add an item"
          name="add-item"
          class="text-black border-2 border-gray-500 rounded p-2"
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
}

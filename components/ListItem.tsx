import DeleteButton from "../islands/DeleteButton.tsx";
export default function ListItem(
  { name, item }: { name: string; item: string[] },
) {
  return (
    <p class="text-lg flex justify-between items-center">
      {item}
      <DeleteButton listName={name} item={item} />
    </p>
  );
}

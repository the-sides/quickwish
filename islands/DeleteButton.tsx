import { MdClose } from "jsr:@preact-icons/md";

export default function DeleteButton(
  { listName, item }: { listName: string; item: string },
) {
  const handClick = async () => {
    console.log("Deleting item:", listName);
    await fetch("/api/delete-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listName, item }),
    });

    // Would it be possible to manipulate DOM of the parent from here?
    window.location.reload();
  };
  return (
    <button
      onClick={handClick}
      type="button"
      className=""
    >
      <MdClose />
    </button>
  );
}

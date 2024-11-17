import { useSignal } from "@preact/signals";

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
    }
    return (
        <>
            {items.value.map(item => <p class="text-lg">{item}</p>)}
            <form onSubmit={handleSubmit} className="flex">
                <input type="text" name="add-item" class="text-black border-2 border-gray-500 rounded p-2" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}
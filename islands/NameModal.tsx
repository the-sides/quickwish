import { type Signal, useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface NameModalProps {
  existingName: Signal<string>;
}

export default function NameModal(props: NameModalProps) {
  const input = useSignal("");
  return (
    <div class="flex gap-8 py-6">
      {props.existingName.value
        ? (
          <div class="flex-1">
            <h1 class="text-2xl font-bold">
              {props.existingName.value}
            </h1>
            <p class="text-gray-500">
              This name is already in use. Please choose another.
            </p>
          </div>
        )
        : (
          <div class="flex-1">
            <h1 class="text-2xl font-bold">
              What is your name?
            </h1>
            <p class="text-gray-500">
              This name will be shared with others. Please choose carefully.
            </p>
          </div>
        )}
      <input
        class="border-2 border-gray-500 rounded p-2"
        placeholder="Enter your name"
        onInput={(e) => {
          input.value = (e.target as HTMLInputElement).value as string;
        }}
      />
      <Button
        onClick={() => {
          props.existingName.value = "";
        }}
      >
        Cancel
      </Button>
      <Button
        onClick={async () => {
          try {
            console.log("Saving name:", input.value);
            const response = await fetch("/api/save-name", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: input.value }),
            });

            if (response.ok) {
              // Assuming the server responds with the saved name, or some confirmation
              const result = await response.text();
              console.log("Saved name:", result);
            } else {
              // Handle errors if needed
              console.error("Failed to save the name");
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }}
      >
        Save
      </Button>
    </div>
  );
}

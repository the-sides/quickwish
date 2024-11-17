import { Button } from "./Button.tsx";

interface NameModalProps {
  existingName: string;
}

export default function NameModal(props: NameModalProps) {
  return (
    <div class="absolute inset-0 h-full w-full overflow-hidden">
      <div className="absolute inset-0 m-auto h-fit rounded-md p-6 pb-8 w-fit z-10 max-w-[600px] bg-slate-200 text-black reveal delay-500">
        <h3 class={"text-2xl font-bold w-full px-4 text-center"}>
          Welcome to QuickWish
        </h3>
        <p class={"text-xl w-full px-4 text-center"}>
          Enter your name to get started.
        </p>
        <p class={"mt-4"}>
          This name will be shared with others and is used to ensure your
          identity against the wishlist owner.
        </p>
        <p>
          The wishlist owner will not be able to see activity made on the
          wishlist. But you will be able to see the gifts others have already
          purchased.
        </p>
        <p>
          If you've used this site on other devices, make sure you're using the
          same name.
        </p>
        <form action="/api/save-name" method="POST">
          <div className="flex justify-center mt-4 gap-3">
            <div className="">
              <label
                htmlFor="name"
                class="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                class="border-2 border-gray-500 rounded p-2"
                placeholder="Enter your name"
                id="name"
                name="name"
              />
            </div>
            <Button class={"h-11 self-end"} type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 h-full w-full bg-black bg-opacity-60 reveal"></div>
    </div>
  );
}
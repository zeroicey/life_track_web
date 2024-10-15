import { Separator } from "@/components/ui/separator";
import { IoIosMore } from "react-icons/io";

export default function MemoItem() {
  return (
    <div className="border-2 rounded-lg border-green-500 p-2 flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        <span className="text-gray-500 text-sm">create_time: aafsaddfd</span>
        <button>
          <IoIosMore />
        </button>
      </div>
      <Separator />
      <div className="">Text</div>
      <div className="grid grid-cols-3 md:flex md:flex-wrap justify-around gap-2">
        <div className="aspect-square bg-gray-300">Attach 1</div>
        <div className="aspect-square bg-gray-300">Attach 2</div>
        <div className="aspect-square bg-gray-300">Attach 3</div>
        <div className="aspect-square bg-gray-300">Attach 4</div>
        <div className="aspect-square bg-gray-300">Attach 5</div>
        <div className="aspect-square bg-gray-300">Attach 6</div>
        <div className="aspect-square bg-gray-300">Attach 7</div>
        <div className="aspect-square bg-gray-300">Attach 8</div>
        <div className="aspect-square bg-gray-300">Attach 9</div>
      </div>
    </div>
  );
}

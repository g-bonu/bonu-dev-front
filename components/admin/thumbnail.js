import TextButton from "@/components/ui/text-button";
import Image from "next/image";

export default function Thumbnail({id, url, onDelete}) {
  return (
    <div className="flex flex-col justify-evenly items-center w-56 h-44 bg-gray-700 rounded-md">
      <Image
        src={url}
        height={113}
        width={200}
      />
      <div>
        <TextButton onClick={() => onDelete(id)}>Delete</TextButton>
      </div>
    </div>
  )
}
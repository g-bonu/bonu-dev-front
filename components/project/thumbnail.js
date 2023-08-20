import Image from "next/image";

export default function Thumbnail({ url }) {
  return (
    <div className="flex justify-center items-center p-2 bg-teal-400/10 rounded-md">
      <Image
        className="rounded-md"
        src={url}
        height={90}
        width={160}
      />
    </div>
  )
}
import Image from 'next/image'

export default function Avatar({width, height}) {
  return (
    <Image 
      alt="Avatar"
      src="/avatar.jpg" 
      width={width} 
      height={height} 
      className="rounded-full"
    />
  );
}
import Image from "next/image";

export default function Item({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="cursor-pointer border border-[#4b5563] ">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          className="transition-transform duration-200 hover:scale-105"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="text-2xl">
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
}

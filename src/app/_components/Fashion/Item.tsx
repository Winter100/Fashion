import Image from "next/image";

export default function Item({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="duration-400 flex h-[28rem] w-72 cursor-pointer flex-col border border-gray-200 transition-shadow ease-in-out hover:border-gray-300 hover:shadow-2xl">
      <div className="relative h-72">
        <Image src={image} quality={90} alt={title} fill objectFit="cover" />
      </div>
      <div className="flex h-2/6 flex-col items-center justify-center p-2 text-2xl">
        <p>{title}</p>
        <p>짧은 컨셉...</p>
      </div>
    </div>
  );
}

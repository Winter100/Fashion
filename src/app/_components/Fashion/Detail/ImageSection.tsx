import Image from "next/image";

export default function ImageSection({ image }: { image: string }) {
  return (
    <div className="flex h-96 w-full flex-col md:h-full md:flex-1">
      <div className="relative h-full">
        <Image src={image} alt="패션 이미지" fill className="object-contain" />
      </div>
    </div>
  );
}

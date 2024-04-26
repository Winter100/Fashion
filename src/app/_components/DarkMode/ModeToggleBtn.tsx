import Image from "next/image";

export default function ModeToggleBtn({ src }: { src: string }) {
  return <Image src={`/${src}.svg`} alt={src} width={20} height={20} />;
}

import React, { useState } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  blurUrl?: string;
  className?: string;
}

export default function FashionImage({
  src,
  alt,
  className = "rounded-xl object-cover",
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  );
}

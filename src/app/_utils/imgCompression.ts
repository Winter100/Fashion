import imageCompression from "browser-image-compression";

export default async function imgCompression(image: File) {
  const responseImage = await imageCompression(image, { maxSizeMB: 0.5 });

  return responseImage;
}

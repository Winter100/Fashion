import { useModal } from "./useModal";

export default function OpenModalBtn({ name }: { name: string }) {
  const { handleOpen } = useModal();
  return (
    <button className=" text-2xl" onClick={handleOpen}>
      {name}
    </button>
  );
}

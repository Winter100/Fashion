import { useModal } from "./useModal";

export default function OpenBtn({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) {
  const { className } = props;
  const { handleOpen } = useModal();
  return (
    <button className={className} onClick={handleOpen}>
      {name}
    </button>
  );
}

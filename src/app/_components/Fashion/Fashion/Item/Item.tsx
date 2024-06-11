import ItemBody from "./ItemBody";
import ItemImage from "./ItemImage";
import ItemSubTitle from "./ItemSubTitle";

export default function Item({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`duration-400 flex h-full w-full cursor-pointer flex-col transition-shadow ease-in-out hover:bg-backgroundOne hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

Item.Image = ItemImage;
Item.Body = ItemBody;
Item.SubTitle = ItemSubTitle;

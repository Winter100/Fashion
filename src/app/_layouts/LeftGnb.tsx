import LeftMenu from "../_components/Gnb/LeftMenu";

export default function LeftGnb() {
  return (
    <nav className="mt-16 hidden justify-center bg-backgroundOne md:mt-20 md:block md:w-40">
      <ul className="flex h-full flex-col items-center justify-around py-0 text-2xl lg:py-28">
        <LeftMenu />
      </ul>
    </nav>
  );
}

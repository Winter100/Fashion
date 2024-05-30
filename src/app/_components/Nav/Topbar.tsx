import Search from "../Menu/Search";

export default function Topbar() {
  return (
    <div className=" fixed top-0 z-10 flex h-16 w-full  items-center justify-center bg-backgroundOne">
      <Search />
    </div>
  );
}

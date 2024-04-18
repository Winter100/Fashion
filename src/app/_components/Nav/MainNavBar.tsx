import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicAuthBar = dynamic(() => import("./AuthBar"), { ssr: false });

export default async function MainNavBar() {
  return (
    <>
      <div className="m-auto grid w-full max-w-screen-lg grid-cols-3">
        <header>
          <Link href={"/"} className="text-7xl font-bold">
            오늘 어때?
          </Link>
        </header>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-7 text-2xl font-black">
            <li>
              <Link href={"/fashion?page=1"}>오늘 어때?</Link>
            </li>
            <li>내일 어때?</li>
            <li>이거 어때?</li>
          </ul>
        </nav>
        <div className="flex items-center justify-end text-2xl">
          <DynamicAuthBar />
        </div>
      </div>
    </>
  );
}

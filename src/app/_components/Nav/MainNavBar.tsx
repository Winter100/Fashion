import Link from "next/link";
import dynamic from "next/dynamic";

import Title from "./Title";
import { menu } from "./menu";

const DynamicAuthBar = dynamic(() => import("./AuthBar"), { ssr: false });

export default async function MainNavBar() {
  return (
    <>
      <div className=" mtmb-2 h-8 text-2xl ">
        <ul className="max-w layout-max-width m-auto flex items-center justify-end">
          <li className="hover:text-blue-600">
            <DynamicAuthBar />
          </li>
        </ul>
      </div>

      <header className="mtmb-2 flex h-32 flex-col items-center justify-center gap-2 border">
        <Title />
      </header>

      <div className="mtmb-2 flex h-12  items-center justify-center shadow-md">
        <nav>
          <ul className="layout-max-width m-auto flex gap-7 text-2xl">
            {menu.map((li) => (
              <li className="hover:text-blue-600" key={li.name}>
                <Link href={li.href}>{li.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

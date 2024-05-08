"use client";

import EditMenuList from "@/app/_components/Menu/SubMenuList";
import EditBtn from "@/app/_components/Fashion/EditBtn";
import DeleteBtn from "@/app/_components/Fashion/DeleteBtn";

export default function Page() {
  return (
    <EditMenuList className="flex h-8 justify-center gap-6 ">
      <EditBtn />
      <DeleteBtn />
    </EditMenuList>
  );
}
// export default function Page() {
//   return null;
// }

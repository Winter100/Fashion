import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useQueryString, useRouteName } from "./useQueryString";
import { useRouteChange } from "./useRouteChange";
import { useSignOut } from "./useAuth";
import { useUserContextData } from "../_provider/UserContextProvider";
import { convertToTag } from "../_lib/utils/convertToTag";
import { TAG_NAME } from "../_constant/constant";
import { setFashionRoute } from "../_lib/utils/setFashionRoute";

export default function useMobile() {
  const [labelValue, setLabelValue] = useState("");
  const { routeName } = useRouteName();
  const pathName = usePathname();

  const { page, validStart, validEnd } = useQueryString();
  const navigateTo = useRouteChange();
  const { signOut: signoutMutation } = useSignOut();
  const { userData, clearLoginData } = useUserContextData();

  const isAuthenticated = userData?.aud === "authenticated";

  useEffect(() => {
    setLabelValue(convertToTag(routeName));
  }, [routeName]);

  function handleItemClick(tag: string) {
    if (tag === TAG_NAME.signout) {
      signoutMutation();
      clearLoginData();
    } else if (tag === TAG_NAME.write) {
      navigateTo(`/${TAG_NAME.write}`);
    } else {
      navigateTo(
        tag === TAG_NAME.signin
          ? `/auth/${tag}`
          : tag === TAG_NAME.mypage
            ? `/${tag}`
            : setFashionRoute(
                TAG_NAME.fashion,
                tag,
                page,
                validStart,
                validEnd,
              ),
      );
    }
  }
  return { handleItemClick, pathName, labelValue, isAuthenticated };
}

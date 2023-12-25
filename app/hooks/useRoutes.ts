import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  IoChatbubbleEllipses,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { signOut } from "next-auth/react";

import useConversation from "./useConservation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: IoChatbubbleEllipses,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUser,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: IoArrowBackCircleOutline,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;

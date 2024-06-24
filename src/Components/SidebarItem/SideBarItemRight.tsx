import { SideBarItemProps } from "./SidebarItem";
import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemRight = (props: SideBarItemProps) => {
  return <SideBarItemBase {...props} position="right" />;
};

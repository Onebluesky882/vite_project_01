import { SideBarItemProps } from "./SidebarItem";
import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemLeft = (props: SideBarItemProps) => {
  return <SideBarItemBase {...props} position="left" />;
};

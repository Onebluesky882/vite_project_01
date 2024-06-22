import { SideBarItemProps } from ".";
import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemRight = (props: SideBarItemProps) => {
  return <SideBarItemBase {...props} position="right" />;
};

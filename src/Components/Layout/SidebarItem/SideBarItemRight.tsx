import { SideBarItemProps } from "../../../types/MenuCategory";
import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemRight = (props: SideBarItemProps) => {
  return <SideBarItemBase {...props} position="right" />;
};

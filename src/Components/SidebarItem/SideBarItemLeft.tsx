import { SideBarItemProps } from ".";
import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemLeft = (props: SideBarItemProps) => {
  return (
    <SideBarItemBase {...props} position="left" />
    // <SideBarItemBase id={props.id} img={props.img} name={props.name} slug={props.slug} position='left' />
  );
};

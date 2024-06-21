import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function SidebarRight({ children }: Props) {
  return <div>{children}</div>;
}

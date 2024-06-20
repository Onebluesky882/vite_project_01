interface Props {
  id: number;
  name: string;
  order: number;
}

export default function OrderList({ id, name, order }: Props) {
  return (
    <>
      {id}
      {name}
      {order}
    </>
  );
}

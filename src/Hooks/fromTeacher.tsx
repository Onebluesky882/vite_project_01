type Order = {
  menuId: string;
  config: {
    amount: number;
  };
  color: string;
};

type TableOrder = {
  id: string;
  menuId: string;
  amount: number;
  status: string;
};
const transformOrder = (order: Order): TableOrder => {
  const {
    menuId,
    config: { amount },
  } = order;

  const outputOrder = {
    amount,
    menuId,
    id: crypto.randomUUID(),
    status: "preparing",
  };

  return outputOrder;

  //   return {
  //     ...order,
  //     id: crypto.randomUUID(),
  //     status: "preparing",
  //   }
};

let order: Order = {
  color: "red",
  menuId: "123",
  config: {
    amount: 5,
  },
};

// prepare to insert to db

let tableOrder: TableOrder = transformOrder(order);

type Person = {
  name: string;
  addressId: string;
  address: {
    address1: string;
    street: string;
    province: string;
  };
  // preference: {
  //     car: {
  //         color: string
  //         segment: string
  //         price: number
  //     },
  //     cloth: {
  //         color: string
  //     }
  // }
};

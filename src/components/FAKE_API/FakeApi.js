const db = {
  orders: [
    {
      id: 1,
      name: "John",
      order_number: "X9837",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 2,
      name: "Sarah",
      order_number: "H8765",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 3,
      name: "Michael",
      order_number: "D9241",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 4,
      name: "Emily",
      order_number: "A7436",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 5,
      name: "David",
      order_number: "F0182",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 6,
      name: "Karen",
      order_number: "N3685",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 7,
      name: "James",
      order_number: "E2391",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 8,
      name: "Jessica",
      order_number: "T5749",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 9,
      name: "Kevin",
      order_number: "Z0921",
      data: "2023-04-05T16:31:00.000Z"
    },
    {
      id: 10,
      name: "Michelle",
      order_number: "Q7538",
      data: "2023-04-05T16:31:00.000Z"
    },
  ],
};

export const getOrders = () => {
  return Promise.resolve(db.orders);
};

export const getInvoiceById = (invoiceid) => {
  return Promise.resolve(db.orders.find(({ order_number }) => order_number === invoiceid));
};

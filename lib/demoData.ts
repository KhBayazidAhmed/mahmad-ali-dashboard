const DataGenerator = {
  logsDemo: 10,
  usersDemo: 10,
  offersDemo: 3,
  noticeDemo: 3,
  orderDataDemo: 6,
  orderPendingDataDemo: 10,
};

const randomString = (length: number) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + length);
const randomPhoneNumber = () =>
  `+91${Math.floor(1000000000 + Math.random() * 9000000000)}`;
const randomDate = (days: number) =>
  new Date(
    Date.now() - Math.random() * 1000 * 60 * 60 * 24 * days
  ).toLocaleString();
const randomBoolean = () => Math.random() < 0.5;

// Logs Demo
export const logsDemo = Array.from(
  { length: DataGenerator.logsDemo },
  (_, id) => ({
    id: id + 1,
    message: [
      "NID Successfully created.",
      "Signature copy created successfully.",
      `NID found: ${randomString(10)}`,
      "Failed login attempt by user.",
      "System error detected.",
      "Order processed successfully.",
    ][Math.floor(Math.random() * 6)],
    level: ["Info", "Warning", "Error"][Math.floor(Math.random() * 3)],
    time: randomDate(7),
  })
);

// Users Demo
export const usersDemo = Array.from(
  { length: DataGenerator.usersDemo },
  (_, id) => ({
    id: id + 1,
    name: [
      "John Doe",
      "Jane Smith",
      "Bob Johnson",
      "Alice Brown",
      "Charlie Green",
    ][Math.floor(Math.random() * 5)],
    whatsapp: randomPhoneNumber(),
    email: `${randomString(5)}@example.com`,
    balance: Math.floor(Math.random() * 2000) + 500, // Random balance between 500-2500
  })
);

// Offers Demo
export const offersDemo = Array.from(
  { length: DataGenerator.offersDemo },
  (_, id) => ({
    id: id + 1,
    title: randomBoolean() ? "Special Offer" : `Offer #${id + 1}`,
    description: `Enjoy a discount of ${
      Math.floor(Math.random() * 30) + 10
    }% valid until ${randomDate(30)}`,
    running: randomBoolean(),
  })
);

// Notice Demo
export const noticeDemo = Array.from(
  { length: DataGenerator.noticeDemo },
  (_, id) => ({
    name: `Notice #${id + 1}`,
    running: randomBoolean(),
    content: `📢 Announcement: ${randomString(
      50
    )} – Check it out before it's gone!`,
  })
);

// Order Data Demo
export const orderDataDemo = Array.from(
  { length: DataGenerator.orderDataDemo },
  (_, id) => ({
    id: id + 1,
    formNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    status: ["Pending", "Completed", "Failed"][Math.floor(Math.random() * 3)],
    deliveryTime: randomDate(7),
  })
);

export const orderPendingDataDemo = Array.from(
  { length: DataGenerator.orderPendingDataDemo },
  (_, index) => ({
    id: index + 1,
    formNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(), // Random 10-digit number
    status: "Pending",
    orderTime: new Date(
      Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7 // Random time in the past 7 days
    ).toLocaleString(),
    username: ["john", "jane", "alice", "bob", "charlie", "dave"][
      Math.floor(Math.random() * 6)
    ], // Random username from a list
    type: ["NID Copy", "Passport", "Driving License", "Utility Bill"][
      Math.floor(Math.random() * 4)
    ], // Random type from a list
  })
);

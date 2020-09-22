let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// const [a, b, c, d, e, f] = order;
const { itemName, quantity, unitPrice } = order;

function receiptForOrders({ itemName, quantity, unitPrice }) {
  const totalReceipt = 0;
  order.forEach(({ itemName, quantity, unitPrice }) =>
    console.log(
      `The unit price of ${itemName} is ${unitPrice}, there is/are ${quantity} unit/units and it costs ${
        quantity * unitPrice
      }. The total receipt costs ${(totalReceipt += quantity * unitPrice)}`
    )
  );
}

console.log(receiptForOrders(order));

/* function calculateThePrice({ quantity, unitPrice }) {
  let newList = {};
  newList = order.forEach(({ quantity, unitPrice }) => {
    quantity * unitPrice;
  });
  console.log(newList);
  return newList;
}
console.log(calculateThePrice(order));
 */

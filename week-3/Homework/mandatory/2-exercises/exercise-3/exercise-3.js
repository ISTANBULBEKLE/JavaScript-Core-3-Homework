let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


const { itemName, quantity, unitPrice } = order;

let totalReceipt = 0;

 console.log(`QTY    ITEM        TOTAL`);
 order.forEach(({ itemName, quantity, unitPrice }) => {
   console.log(`${quantity} ${itemName} ${unitPrice}`);
   totalReceipt += unitPrice;
 });

 console.log(`Total RECEIPT: ${totalReceipt}`);
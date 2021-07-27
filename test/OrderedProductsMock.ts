import { Models } from 'utilities-techsweave';

const OrderedProductsMock: Models.Tables.IOrderedProduct[] = [
  {
    quantity: 10,
    productId: '43r2343344',
    price: 14.5,
  },
  {
    quantity: 1,
    productId: '498324nr98hriu8',
    price: 599,
  },
  {
    quantity: 1,
    productId: 'asdqwdwqdqwfqwf',
    price: 999,
  },
];

export function getTotal() {
  let total: number;
  total = 0;
  for (let i = 0; i < OrderedProductsMock.length; i += 1) {
    total += (OrderedProductsMock[i].price * OrderedProductsMock[i].quantity);
  }
  return total;
}

export default OrderedProductsMock;

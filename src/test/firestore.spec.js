import MockFirebase from 'mock-cloud-firestore';

import {
  createOrder, readAllOrders,/*  updateStatusOrder, updateTimeDateEnd, */
} from '../firebase/firestore';

const fixtureData = {
  __collection__: {
    orders: {
      __doc__: {
        order001:{
          client: "Thais",
          dateEnd: "13 jun 2021",
          dateInit: "13 jun 2021",
          orderDateTime: 20210512171325,
          orderNumber: 1,
          products: [
            {
              amount: 5,
              id: "11",
              img: "https://i.pinimg.com/564x/d3/47/87/d34787d586c5caadf1c3dd98a8ee4faf.jpg",
              name: "Papas fritas",
              price: "5",
              type: "Acompañamientos"
            }
          ],
          server: "Anita",
          status: "ready",
          table: "8",
          timeEnd: "17:14",
          timeInit: "17:13",
          totalPrice: 0,
          totalTime: "1 minuto"
        },
        order002:{
          client: "Thais",
          dateEnd: "11 jun 2021",
          dateInit: "11 jun 2021",
          orderDateTime: 20210512171320,
          orderNumber: 2,
          products: [
            {
              amount: 2,
              id: "2",
              img: "https://i.pinimg.com/564x/d3/47/87/d34787d586c5caadf1c3dd98a8ee4faf.jpg",
              name: "Café con leche",
              price: "7",
              type: "Desayuno"
            }
          ],
          server: "Carito",
          status: "pending",
          table: "5",
          timeEnd: "17:14",
          timeInit: "17:13",
          totalPrice: 0,
          totalTime: "1 minuto"
        }
      }
    }
  }
}
const newOrder = {
  orderNumber: 1,
  client: "Thais",
  server: "Anita",
  table: "2",
  products: [{
    amount: 2,
    id: "11",
    img: "https://i.pinimg.com/564x/d3/47/87/d34787d586c5caadf1c3dd98a8ee4faf.jpg",
    name: "Papas fritas",
    price: "5",
    type: "Acompañamientos"}
  ],
  totalPrice: 0,
  dateInit: "13 jun 2021",
  timeInit: "18:39",
  orderDateTime: "20210513183904",
  dateEnd: "",
  timeEnd: "",
  totalTime: "",
  status: "pending"
}
global.firebase = new MockFirebase(fixtureData);


describe('addOrder', () => {
  it('should add an order', (done) => createOrder(newOrder)
    .then(() => readAllOrders(
      (data) => {
        const result = data.find((post) => post.client === 'Thais');
        expect(result.content).toBe('Thais');
        done();
      },
    )));
});

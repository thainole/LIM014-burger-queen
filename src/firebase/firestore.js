import { db } from './config'

export const createOrder = (orderData) => db.collection('orders').add(orderData)

export const dateOrderDB = () => {
  const orderDate = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const orderTime = {
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date().toLocaleDateString('es-Es', orderDate);
  const time = new Date().toLocaleTimeString('es-Es', orderTime);
  const dateTime = `${date} ${time}`;

  return dateTime;
};
export const orderDate = () => {
  const year = new Date().getFullYear();
  const month = `0${new Date().getMonth()}`.slice(-2);
  const day = `0${new Date().getDate()}`.slice(-2);
  const hour = `0${new Date().getHours()}`.slice(-2);
  const minute = `0${new Date().getMinutes()}`.slice(-2);
  const second = `0${new Date().getSeconds()}`.slice(-2);
  // eslint-disable-next-line radix
  return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
};
// export const readAllOrders = () => {
//   let arrayOrders = [];
//   db.collection('orders')
//     .onSnapshot((querySnapshot) => {
//       const x = querySnapshot.docs.map((doc) => ({
//         orderId: doc.id,
//         ...doc.data(),
//       }))
//       arrayOrders = [...x]
//       // cb(arrayOrders);
//       console.log(arrayOrders)
//       return arrayOrders;
//     });
// }

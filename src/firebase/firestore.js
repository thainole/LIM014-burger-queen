import { db } from './config'

const createOrder = (orderData) => db.collection('orders').add({
  ...orderData,
  orderNumber: orderData.orderNumber + 1,
})

const updateStatusOrder = (idOrder, valueStatus) => db.collection('orders').doc(idOrder).update({
  status: valueStatus,
})

const orderTime = () => {
  const time = { hour24: 'true', hour: 'numeric', minute: 'numeric'};
  const newTime = new Date().toLocaleTimeString('es-Es', time);
  return `${newTime}`
}

const orderDate = () => {
  const date = { month: 'short', day: 'numeric', year: 'numeric' };
  const newDate = new Date().toLocaleDateString('es-Es', date);
  return `${newDate}`
}

const orderDateTime = () => {
  const year = new Date().getFullYear();
  const month = `0${new Date().getMonth()}`.slice(-2);
  const day = `0${new Date().getDate()}`.slice(-2);
  const hour = `0${new Date().getHours()}`.slice(-2);
  const minute = `0${new Date().getMinutes()}`.slice(-2);
  const second = `0${new Date().getSeconds()}`.slice(-2);
  // eslint-disable-next-line radix
  return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
};

// aquí iba lo del onSnapchot pero no sé cómo lo ponemos xd

export {
  createOrder,
  orderTime,
  orderDate,
  orderDateTime,
  updateStatusOrder
  // duration
}

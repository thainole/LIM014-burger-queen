import { db } from './config'

const createOrder = (orderData) => db.collection('orders').add({
  ...orderData,
  orderNumber: orderData.orderNumber + 1,
})

const readAllOrders = (cb, order) => db.collection("orders")
  .orderBy("orderDateTime", order)
  .onSnapshot((querySnapshot) => {
    const arrOrders = [];
    querySnapshot.docs.forEach((doc) =>
      arrOrders.push({
        orderId: doc.id,
        ...doc.data(),
      })
    );
    cb(arrOrders);
  });

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

const updateTimeDateEnd = (idOrder, initTime) => db.collection('orders').doc(idOrder).update({
  timeEnd: orderTime(),
  dateEnd: orderDate(),
  totalTime: duration(initTime)
})

const duration = (initTime) => {
  const a = orderTime().split(':');
  const b = initTime.split(':');
  const aParse = parseInt(a[0])*60 + parseInt(a[1])
  const bParse = parseInt(b[0])*60 + parseInt(b[1])
  const difMin = aParse - bParse
  return `${difMin} minuto(s)` 
}


export {
  createOrder,
  readAllOrders,
  orderTime,
  orderDate,
  updateTimeDateEnd,
  duration,
  orderDateTime,
  updateStatusOrder
}

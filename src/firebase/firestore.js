import { db } from './config'

/*
  Esto funciona pero aún no es necesario usarlo :D 

  const duration = (anteriorTime) => {
    const a = orderTime().split(':');
    const b = anteriorTime.split(':');
    const aParse = parseInt(a[0])*60 + parseInt(a[1])
    const bParse = parseInt(b[0])*60 + parseInt(b[1])
    const difMin = aParse - bParse
    return `${difMin} minutos` 
  } 

*/
const createOrder = (orderData/* , newTotal */) => db.collection('orders').add({
  ...orderData,
  orderNumber: orderData.orderNumber + 1,
  // totalTime: duration(orderData.timeInit)
  /* totalPrice: newTotal,  esto no funciona jijiji */
})

const orderTime = () => {
  const time = { hour24: 'true', hour: 'numeric', minute: 'numeric'};
  const newTime = new Date().toLocaleTimeString('es-Es', time);
  return `${newTime}`
}
// console.log(duration())

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
  // duration
}

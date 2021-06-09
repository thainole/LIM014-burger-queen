import { db } from './config'

export const createOrder = (orderData) => db.collection('orders').add(orderData)

export const readAllOrders = () => {
  db.collection('orders')
    .onSnapshot((querySnapshot) => {
      const prueba = querySnapshot.docs.map((doc) => ({
        orderId: doc.id,
        ...doc.data(),
      }))
      console.log(prueba)
    });
}

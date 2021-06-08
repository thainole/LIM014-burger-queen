import { db } from './config'
console.log(db);

export const createOrder = (estado) => {
  db.collection('orders').add({
    estado
  })
}

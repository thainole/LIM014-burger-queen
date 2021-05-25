import React from 'react'
import { Estado } from './Estado'
import { Historial } from './Historial'
import { Pedidos } from './Pedidos'

export const Mesero = () => {
  return (
    <>
      <Pedidos />
      <Estado />
      <Historial />
    </>
  )
}

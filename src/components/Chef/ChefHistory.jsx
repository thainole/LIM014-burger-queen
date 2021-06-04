import React from 'react'
import { CardsHistory } from '../Server/CardsHistory'
import { ChefNavBar } from './ChefNavBar'

export const ChefHistory = () => {
  return (
    <section>
      <ChefNavBar />
      <CardsHistory />
    </section>
  )
}

import React from 'react'
import DefaultPage from '../Component/DefaultPage'
import { useSelector } from 'react-redux'

export default function Home() {
  const {cars} = useSelector(state=>state.carReducer)
  return (
    <DefaultPage>
 <h1>Home page</h1>
 <h1>The length of cars array is{cars.length}</h1>
    </DefaultPage>
       
   
  )
}

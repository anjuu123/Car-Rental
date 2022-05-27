import React, {useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import DefaultPage from '../Component/DefaultPage'
import {getAllCars} from '../redux/actions/carsAction'


function Home() {
  const { cars, loading } = useSelector(state => state.carsReducer)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCars())
  }, [])


  return (
    <DefaultPage>
      <h1>Home Page</h1> 
    </DefaultPage>


  )
}

export default Home
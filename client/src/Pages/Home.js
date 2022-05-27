import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultPage from '../Component/DefaultPage'
import { getAllCars } from '../redux/actions/carsAction.js'
import {Row, Col} from 'antd'

export default function Home() {
  const { cars, loading } = useSelector(state => state.carReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars())
  }, [])


  return (
    <DefaultPage>
      <Row>
        {cars.map(car=>{
          return
           <Col lg={5} sm={24} xs={24}>
          <div>
            <h3>{car.name}</h3>
          </div>
          </Col>
        })}
      </Row>
      
    </DefaultPage>


  )
}


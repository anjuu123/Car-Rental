import React from 'react'
import { Row, Col, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import {useDispatch}from 'react-redux';
import {userLogin} from '../redux/actions/userActions'


function Login() {
  const dispatch = useDispatch()
  function onFinish(values){
    dispatch(userLogin(values))
    console.log(values)
  }

  
  return (
    <div className='login'>
      <Row gutter={16} className="d-flex align-item-center">
        <Col lg={16} style={{ position: 'relative' }}>

          <img src='https://s3.amazonaws.com/cka-dash/030-0220-CCF910/model2.png' alt='img-car' />
        <h1 className='login-logo'>A&A Rental</h1>
        </Col>
        <Col lg={8} className='text-left'>


          <Form layout="vertical" className='login-form'  onFinish={onFinish}>
            <h1>Login</h1>
            <hr />

            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <button className='btn1 mt-2 mb-3'>Login</button>

            <br/>

<Link to='/register'>Click Here to Register</Link>
          </Form>
        </Col>
      </Row>

    </div>
  )
}


export default Login
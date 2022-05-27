import React from 'react'
import {Row,Col,Input,Form} from 'antd';
import { Link } from 'react-router-dom';

function onFinish(values){
  console.log(values)
}

function Register() {
  return (
    <div className='login'>
    <Row gutter={16} className="d-flex align-item-center">
      <Col lg={16} style={{ position: 'relative' }}>

        <img src='https://s3.amazonaws.com/cka-dash/030-0220-CCF910/model2.png' alt='img-car' />
      <h1 className='login-logo'>A&A Rental</h1>
      </Col>
      <Col lg={8} className='text-left'>


        <Form layout="vertical" className='login-form p-2' onFinish={onFinish}>
          <h1>Register</h1>
          <hr />

          <Form.Item name="username" label="Username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="Confirm password" label="Confirm Password" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <button className='btn1 mt-2 mb-3'>Register</button>
          <br/>

         <Link to='/login'>Already have an account ? Click Here</Link>
        </Form>
      </Col>
    </Row>

  </div>
)
}


export default Register
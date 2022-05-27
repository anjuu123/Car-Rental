import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd';

function Login() {
  return (
    <div className='login'>
      <Row gutter={16} className="d-flex align-item-center">
        <Col lg={16} style={{ position: 'relative' }}>

          <img src='https://s3.amazonaws.com/cka-dash/030-0220-CCF910/model2.png' alt='img-car' />
        <h1 className='login-logo'>A&A Rental</h1>
        </Col>
        <Col lg={8} className='text-left'>


          <Form layout="vertical" className='login-form'>
            <h1>Login</h1>
            <hr />

            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Button className='btn1'>Login</Button>
          </Form>
        </Col>
      </Row>

    </div>
  )
}


export default Login
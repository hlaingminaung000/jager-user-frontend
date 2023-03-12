import React from 'react'
import { Form, Input} from 'antd';
import { LockOutlined,UserOutlined } from '@ant-design/icons';
import {ButtonBase} from '@mui/material';
import GoBackHeader from "../components/goBackHeader"

export default function Login() {

    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <div>
        <GoBackHeader hideArrow name={`Login`} />
        <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            marginTop: "2rem",
            fontFamily: "inherit"
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="အမည်"
            name="name"
            labelCol = {{span: 24}}
            wrapperCol = {{span: 24}}
            hasFeedback
            rules={[
              {
                required: true,
                message: `အမည် လိုအပ်နေပါသည်`,
              },
            ]}
            className="change-password-input"
            style={{padding: "0 2rem",color: "white"}}
          >
            <Input  prefix={<UserOutlined className="site-form-item-icon" />} style={{backgroundColor: "rgb(10, 50, 77)"}} />
          </Form.Item>
          <Form.Item
            label="စကားဝှက်"
            labelCol = {{span: 24}}
            wrapperCol = {{span: 24}}
            name="password"
            className="change-password-input"
            hasFeedback
            rules={[
              {
                required: true,
                message: `စကားဝှက် လိုအပ်နေပါသည်`,
              },
              {
                min: 6,
                max: 15,
                message: "စကားဝှက်မှာ ၆ မှ ၁၅ လုံးထိဖြစ်သင့်ပါသည်",
              },
            ]}
            style={{padding: "0 2rem",color: "white"}}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} style={{backgroundColor: "rgb(10, 50, 77)"}} className="change-password-input" />
          </Form.Item>
         
          <div style={{display: "flex",justifyContent: "center",alignItems:"center",padding: "0 2rem",marginTop: "20%"}}>
              <ButtonBase type='submit' component="button" style={{color: "white",display: "block",backgroundColor: "rgb(10, 50, 77)",padding: "1.6rem 0",borderRadius: "2rem",width: "100%",fontFamily: "inherit",justifyContent: "center",alignItems: "center"}}>
                 <h4 style={{textAlign: "center",margin: 0}}>Login</h4>
              </ButtonBase>
          </div>
        </Form>
      </div>
    </div>
  )
}

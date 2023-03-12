import React from 'react'
import { Form, Input} from 'antd';
import { LockOutlined} from '@ant-design/icons';
import {ButtonBase} from '@mui/material';
import my from "../../languages/my.json"
import en from "../../languages/en.json"
import GoBackHeader from '../goBackHeader'
import { languageContext } from '../../context';

export default function ChangePassword() {
    const {lang} = React.useContext(languageContext); 
    let text = (lang == "my") ? my : en;
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <div>
      <GoBackHeader name={text["Change Password"]} />
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
            label={text['Old Password']}
            name="oldPassword"
            labelCol = {{span: 24}}
            wrapperCol = {{span: 24}}
            hasFeedback
            rules={[
              {
                required: true,
                message: `${text['Please input your old password!']}`,
              },
            ]}
            className="change-password-input"
            style={{padding: "0 2rem",color: "white"}}
          >
            <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />} style={{backgroundColor: "rgb(10, 50, 77)"}} />
          </Form.Item>
          <Form.Item
            label={text['New Password']}
            labelCol = {{span: 24}}
            wrapperCol = {{span: 24}}
            name="newPassword"
            className="change-password-input"
            hasFeedback
            rules={[
              {
                required: true,
                message: `${text['Please input your new password!']}`,
              },
              {
                min: 6,
                max: 15,
                message: `${text['Password must be between 6 and 15 characters!']}`,
              },
            ]}
            style={{padding: "0 2rem",color: "white"}}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} style={{backgroundColor: "rgb(10, 50, 77)"}} className="change-password-input" />
          </Form.Item>
          <Form.Item
            label={text['Comfirm New Password']}
            labelCol = {{span: 24}}
            wrapperCol = {{span: 24}}
            name="comfirmNewPassword"
            className="change-password-input"
            hasFeedback
            rules={[
              {
                required: true,
                message: `${text['Please input your new password!']}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(`${text['The two passwords that you entered do not match!']}`));
                },
              }),
            ]}
            style={{padding: "0 2rem",color: "white"}}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} style={{backgroundColor: "rgb(10, 50, 77)"}} className="change-password-input" />
          </Form.Item>
          <div style={{display: "flex",justifyContent: "center",alignItems:"center",padding: "0 2rem",marginTop: "4rem"}}>
              <ButtonBase type='submit' component="button" style={{color: "white",display: "block",backgroundColor: "rgb(10, 50, 77)",padding: "1.2rem 0",borderRadius: "2rem",width: "100%",fontFamily: "inherit",justifyContent: "center",alignItems: "center"}}>
                 <h4 style={{textAlign: "center",margin: 0}}>{text['Change Password']}</h4>
              </ButtonBase>
          </div>
        </Form>
      </div>
    </div>
  );
}

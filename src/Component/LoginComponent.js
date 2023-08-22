import React, { useState } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select } from "antd";
import login_img from "../Assets/Images/login_img.gif";
import { useNavigate } from "react-router-dom";
import { LoginDropdown } from "../constant/constant";
const {Option} = Select;

const LoginComponent = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const queryParams = new URLSearchParams({
      LoginType: values.login_type,
    }).toString();
    navigate(`/main?${queryParams}`);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <section className="login_page">
        <div className="component">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="img">
                <img src={login_img} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="login_form">
                <h1>Welcome To Leave Portal</h1>
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
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Select"
                    name="login_type"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Dropdown!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select"
                      //   onChanghe={andleChange}
                      // options={[
                      //   {
                      //     value: "employee",
                      //     label: "Employee",
                      //   },
                      //   {
                      //     value: "admin",
                      //     label: "Admin",
                      //   },
                      // ]}
                    >
                      {LoginDropdown.map((data, index) => (
                        <Option value={data.id}>{data.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <button type="primary" htmlType="submit">
                      Login
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginComponent;

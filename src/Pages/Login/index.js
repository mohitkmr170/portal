import { Form, Icon, Input, Button, Spin, Alert } from "antd";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/login-logo.jpg";
import "./index.scss";

const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, notice: "" };
    this.onClose.bind(this);
  }

  onClose = e => {
    this.setState({ notice: "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var promise = new Promise(function(resolve, reject) {
          if (values.userName === "geekyants" && values.password === "9") {
            resolve(true);
          } else {
            reject("Invalid Credentials");
          }
        });
        promise
          .then(res => {
            if (res) {
              this.setState({ isLoading: true });
              setTimeout(res => {
                this.props.history.push("/dashboard");
              }, 2000);
            }
          })
          .catch(res => {
            this.setState({ notice: res });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginPage">
        <Form onSubmit={this.handleSubmit} className="login-form">
          {this.state.notice ? (
            <div>
              <Alert
                message={this.state.notice}
                type="error"
                closable
                onClose={this.onClose}
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <img className="login-logo" src={Logo} alt="LOGO" width="120" />
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                  className="input-text"
                  ref={uname => {
                    this.uname = uname;
                  }}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  className="input-text"
                  ref={pword => {
                    this.pword = pword;
                  }}
                />
              )}
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button btn-large "
              >
                {this.state.isLoading ? (
                  <div>
                    <Spin />
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

const WrappedLogin = Form.create()(Login);

export default withRouter(WrappedLogin);

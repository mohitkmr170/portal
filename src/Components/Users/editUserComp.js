import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Button,
  Breadcrumb,
  AutoComplete
} from "antd";
import firebase from "../../firebase.js";
import { withRouter } from "react-router-dom";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 10000,
    label: 10000
  },
  {
    value: 50000,
    label: 50000
  }
];
const residences1 = [
  {
    value: true,
    label: "YES"
  },
  {
    value: false,
    label: "NO"
  }
];
const residences2 = [
  {
    value: true,
    label: "YES"
  },
  {
    value: false,
    label: "NO"
  }
];
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 24,
      offset: 4
    }
  }
};

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let updateConfig = firebase
          .database()
          .ref(`users/${this.props.userId}`);
        updateConfig
          .update({
            limit: values.residence[0],
            Kyc: values.residence1[0],
            isLocked: values.residences2[0]
          })
          .then(() => {
            console.log("acds", this.props);
            this.props.history.push("/Dashboard");
          })
          .catch(err => console.log(err));
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { userData } = this.props;
    console.log("asdas", this.props);
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <div className="header-inner">
          <h3>Edit Details</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/users">Users</Link>
            </Breadcrumb.Item>

            {/* <Breadcrumb.Item>Edit User</Breadcrumb.Item> */}
          </Breadcrumb>
        </div>
        <div className="content">
          <Form onSubmit={this.handleSubmit} className="form-item">
            <FormItem {...formItemLayout} label="KYC">
              {getFieldDecorator("residence1", {
                initialValue: [userData.Kyc],
                rules: [
                  {
                    type: "array",
                    required: false,
                    message: "Please select KYC!"
                  }
                ]
              })(<Cascader options={residences1} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="LIMIT">
              {getFieldDecorator("residence", {
                initialValue: [userData.limit],
                rules: [
                  {
                    type: "array",
                    required: false,
                    message: "Please select Limit!"
                  }
                ]
              })(<Cascader options={residences} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Locked">
              {getFieldDecorator("residences2", {
                initialValue: [userData.isLocked],
                rules: [
                  {
                    type: "array",
                    required: false,
                    message: "Please select Lock Status!"
                  }
                ]
              })(<Cascader options={residences2} />)}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default withRouter(WrappedRegistrationForm);

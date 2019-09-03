import { Button,Checkbox,Form, Icon, Input} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
interface UserFormProps extends FormComponentProps {
    age: number
    name: string
    history: any
}
class App extends React.Component<UserFormProps, any> {
    constructor(props:any){
        super(props)
        this.state={
            list:[]
        }
    }
  public handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault()
      this.props.form.validateFields((err: any, values: any) => {
          if (!err) {

              console.log('Received values of form: ', values)
          }
      })
  }
  public render() {
      const { getFieldDecorator } = this.props.form
      return (
          <div className='content'>
          <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                  {getFieldDecorator('user_name', {
                      rules: [
                          {
                              message: 'Please input your user_name!',
                              required: true
                          }
                      ]
                  })(
                      <Input
                               prefix={
                              <Icon
                                  type="user"
                                  style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                          }
                          placeholder="user_name"
                      />
                  )}
              </Form.Item>
              <Form.Item>
                  {getFieldDecorator('user_pwd', {
                      rules: [
                          {
                              message: 'Please input your user_pwd!',
                              required: true
                          }
                      ]
                  })(
                      <Input
                          prefix={
                              <Icon
                                  type="lock"
                                  style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                          }
                          type="user_pwd"
                          placeholder="user_pwd"
                      />
                  )}
              </Form.Item>
              <Form.Item>
                  {getFieldDecorator('remember', {
                      initialValue: true,
                      valuePropName: 'checked'
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                      Forgot password
                  </a>
                  <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button">
                      Log in
                  </Button>
                  Or <a href="">register now!</a>
              </Form.Item>
          </Form>
          </div>
      )
  }
}

export default Form.create()(App)

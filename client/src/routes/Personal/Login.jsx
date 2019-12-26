import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button, Modal, } from 'antd';
import {login} from '../../api/personal';


function ModalError() {
    const modal = Modal.error({
        title: '登录失败',
        content: `用户名或密码错误请重新登录`,
    });
    setTimeout(() => {
        modal.destroy();
    },  2000);
}



class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {name, password} = values;
                let result = await login({name, password});
                if (parseFloat(result.code) === 0) {
                    this.props.history.go(-1);
                } else {ModalError();}
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item className='login-btn'>
                    <Button type="primary" block icon='login' htmlType="submit">
                        登录
                    </Button>
                    <Button
                        type="primary"
                        block icon='login'
                        onClick = {() => this.props.history.push('/personal/register')}
                    >
                        还没注册? 立马注册
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}
export default withRouter(connect()(Form.create()(Login)));
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Form, Input, Icon, Button,} from 'antd';

import {register} from '../../api/personal';
import {ModalError} from '../../components/ModalError';
import action from '../../store/action';

class Register extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
               let {name, password, email, phone} = values;
               let {code} = await register({
                   name, password, email, phone
               });
               if (parseFloat(code) === 0) {
                   this.props.getUserInfo();
                   this.props.history.push('/personal');
               } else {
                   ModalError('注册失败', '请重新注册')
               }
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="register">
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label='用户名' hasFeedback>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入你的密码',
                            },
                        ],
                    })(<Input.Password
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                    />)}
                </Form.Item>
                <Form.Item label='手机号码' hasFeedback>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号码' }],
                    })(
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="手机号码"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="邮箱" hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: '您输入的邮箱格式不正确',
                            },
                            {
                                required: true,
                                message: '请输入您的邮箱',
                            },
                        ],
                    })(<Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="邮箱"
                    />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" block htmlType="submit">
                        立即注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }
}

export default withRouter(connect(null, action.personal)(Form.create()(Register)));
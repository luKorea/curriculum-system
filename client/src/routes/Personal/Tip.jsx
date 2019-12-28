import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button} from 'antd';
import {withRouter} from 'react-router-dom';

class Tip extends Component {

    render() {
        return (<div className='tip'>
            <Alert
                message="友情提示"
                description="您还没有登录，请先登录哦"
                type="info"
                style={{marginBottom: '.2rem'}}
            />
            <Button
                type="primary"
                block icon='login'
                style={{marginBottom: '.2rem'}}
                onClick={() => this.props.history.push('/personal/login')}
            >
                点击立即登录
            </Button>
            <Button
                type="primary"
                block icon='login'
                onClick = {() => this.props.history.push('/personal/register')}
            >
                点击立即注册
            </Button>
        </div>);
    }
}

export default withRouter(connect()(Tip));
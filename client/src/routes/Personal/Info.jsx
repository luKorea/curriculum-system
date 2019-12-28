import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';


import {layout} from '../../api/personal';
import action  from "../../store/action";

class Info extends Component {

    componentWillMount() {
        let {baseInfo, getUserInfo} = this.props;
        // eslint-disable-next-line no-unused-expressions
        !baseInfo ? getUserInfo() : null;
    }

    render() {
        let {baseInfo} = this.props;
        if (!baseInfo) return '';
        let {name, email, phone} = baseInfo;
        return <div className="info">
            <div className='info-title'>
                <span>用户信息</span>
            </div>
            <div>
                <span>用户名:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>邮箱:</span>
                <span>{email}</span>
            </div>
            <div>
                <span>手机号:</span>
                <span>{phone}</span>
            </div>
            <Button
                type="primary"
                block icon='login'
                style={{marginTop: '.2rem'}}
                onClick={async () => {
                    await layout();
                    this.props.history.push('/personal')
                }}
            >
                点击退出
            </Button>
        </div>
    }
}

export default withRouter(connect(state => ({...state.personal}), action.personal)(Info));
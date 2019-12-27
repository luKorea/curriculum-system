import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';


import Info from "./Personal/Info";
import Tip from './Personal/Tip';
import Login from "./Personal/Login";
import Register from "./Personal/Register";

import {checkLogin} from '../api/personal';
import '../static/css/personal.less';

class Personal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    // 验证是否登录
    async componentDidMount() {
        let {code} = await checkLogin(),
            isLogin = parseFloat(code) === 0;
        this.setState({isLogin});
    }

    // 如果当前组件之前没有彻底在页面中移除（本组件内容在子组件中切换），每一次走的是更新的流程，而不是重新挂载的流程
    async componentWillReceiveProps() {
        let {code} = await checkLogin(),
            isLogin = parseFloat(code) === 0;
        this.setState({isLogin});
    }

    render() {
        return <section className='personal-box'>
            <Switch>
                <Route path='/personal/info' render={() => {
                    if (this.state.isLogin) return <Info/>;
                    return <Tip />
                }}/>
                <Route path='/personal/login' component={Login}/>
                <Route path='/personal/register' component={Register}/>
                <Redirect from='/personal' to='/personal/info'/>
            </Switch>
        </section>
    }
}

export default connect()(Personal);
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

    async componentDidMount() {
        let {code} = await checkLogin(),
            isLogin = parseFloat(code) === 0;
        this.setState({isLogin});
    }

    render() {
        return <section>
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
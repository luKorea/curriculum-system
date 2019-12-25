import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';


class NavBottom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <footer className='footer-nav-box'>
            <NavLink to='/course'><Icon type="home" /><span>首页</span></NavLink>
            <NavLink to='/mycourse'><Icon type="solution" /><span>我的课程</span></NavLink>
            <NavLink to='personal'><Icon type="user" /><span>个人中心</span></NavLink>
        </footer>
    }
}

export default withRouter(connect()(NavBottom));
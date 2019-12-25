import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon, Menu, Dropdown} from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">全部课程</Menu.Item><Menu.Divider/>
        <Menu.Item key="1">REACT课程</Menu.Item><Menu.Divider/>
        <Menu.Item key="2">VUE课程</Menu.Item><Menu.Divider/>
        <Menu.Item key="3">小程序课程</Menu.Item>
    </Menu>
);

class NavTop extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <header className='header-nav-box'>
            {/*首页导航*/}
            <div className="home-box">
                <div className="base-box">
                    <h1 className="logo">课程教育</h1>
                    <Dropdown className="menu" overlay={menu} trigger={['click']}>
                        <Icon type='bars'/>
                    </Dropdown>
                </div>
            </div>
        </header>
    }
}

export default withRouter(connect()(NavTop));
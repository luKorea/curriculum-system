import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon, Menu, Dropdown} from 'antd';

import action from '../store/action';

class NavTop extends Component {

    showList = ev => {
        let {key, item: {props: {type}}} = ev;
        if (key) {
            this.props.getListInfo({
                page: 1,
                type,
                flag: 'replace'
            })
        }
    };

    render() {

        const menu = (
            <Menu onClick={this.showList}>
                <Menu.Item key="0" type='all'>全部课程</Menu.Item><Menu.Divider/>
                <Menu.Item key="1" type="react">REACT课程</Menu.Item><Menu.Divider/>
                <Menu.Item key="2" type='vue'>VUE课程</Menu.Item><Menu.Divider/>
                <Menu.Item key="3" type='xiaochengxu'>小程序课程</Menu.Item>
            </Menu>
        );

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

export default withRouter(connect(null, action.course)(NavTop));
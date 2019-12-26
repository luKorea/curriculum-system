import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>注册</div>);
    }
}

export default withRouter(connect()(Register));

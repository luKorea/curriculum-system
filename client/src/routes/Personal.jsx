import React, {Component} from 'react';
import {connect} from 'react-redux';


class Personal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Personal</div>);
    }
}

export default connect()(Personal);
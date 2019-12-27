import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Details</div>);
    }
}

export default connect()(Details);
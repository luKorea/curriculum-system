import React, {Component} from 'react';
import {connect} from 'react-redux';


class MyCourse extends Component {

    render() {
        return (<div>MyCourse</div>);
    }
}

export default connect()(MyCourse);
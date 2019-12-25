import React, {Component} from 'react';
import {connect} from 'react-redux';

import './index.less';

class Course extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Course</div>);
    }
}

export default connect()(Course);
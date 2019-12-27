import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import List from './Course/List';
import Details from './Course/Details';

import '../static/css/course.less';

class Home extends Component {

    render() {
        return <section className="course-box">
            <Switch>
                <Route path='/course' component={List}/>
                <Route path='/course/details' component = {Details}/>
            </Switch>
        </section>
    }
}

export default Home;
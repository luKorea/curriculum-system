import React, {Component} from 'react';

import action from './../../store/action';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        let {getState} = this.props.store,
            {number} = getState().personal;
        this.state = {number};
    }

    componentDidMount() {
       let {subscribe, getState} = this.props.store;
       subscribe(() => {
           this.setState({
               number: getState().personal.number
           })
       })
    }

    render() {
        let {number} = this.state;
        let {dispatch} = this.props.store;
        return (<div>
            <span>你好你是第{number}个用户访问这个网站</span>
            <button onClick={() => dispatch(action.personal.addNumber())}>点我增加访问量</button>
        </div>);
    }
}

export default UserInfo;
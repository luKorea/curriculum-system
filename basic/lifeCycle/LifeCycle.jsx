import React, {Component} from 'react';

class LifeCycle extends Component {

    // [基本流程]
    // constructor 创建一个组件
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // componentWillMount 第一次渲染之前
    componentWillMount() {
        console.log('componentWillMount');
    }
    // componentDidMount 第一次渲染之后
    componentDidMount() {
        console.log('componentDidMount');
    }
    // render 第一次渲染
    render() {
        console.log('render');
        return (<div>LifeCycle</div>);
    }

    // [修改流程：当组件的状态数据发生改变时]

    // shouldComponentUpdate 是否允许组件渲染
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
    }

    // componentWillUpdate 重新渲染之前
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }
    // componentDidUpdate 重新渲染之后
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    // componentWillReceiveProps 父组件把传递给子组件的的属性发生改变后触发的钩子函数
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
    }

    // [销毁]

    // componentWillUnmount 卸载组件
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

export default LifeCycle;
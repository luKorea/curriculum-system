import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * @description Provider 当前项目的根组件
 * 1. 接收属性传递进来的store，把store挂载到上下文中，
 * 这样当前项目的任何一个子组件都可以通过上下文直接获取
 * 2. 在组件的render中，把传递给provider的子元素渲染
 */

class Provider extends Component {

    // 设置上下文信息类型
    static childContextTypes = {
      store: PropTypes.object
    };

    // 设置上下文信息值
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return this.props.children;
    }
}



let mapStateToProps = state => {};
let mapDispatchToProps = dispatch => {};

/**
 * @description 高阶组件(基于高阶函数：柯里化函数) 创建的组件是高阶组件
 * @param mapStateToProps {function} 回调函数，把一些redux中的对象挂载到组件的属性上
 * @param mapDispatchToProps {function} 回调函数，把一些需要派发的的任方法挂载到组件的属性上
 * @return function 返回一个函数
 */
let connect = (mapStateToProps, mapDispatchToProps) => {
    return  function connectHot(Component) {
        return class Proxy extends Component {
            // 获取上下文的store
            static contextTypes = {
                store : PropTypes.object
            };

            // 获取store的state和dispatch，把传递的两个回调函数执行，并接受返回的结果
            constructor(props, context) {
                super(props, context);
                this.state = this.queryMountProps();
            }

            // 从redux中获取最新的信息，基于回调函数的筛选，返回的是需要挂载到组件上的属性
            queryMountProps = () => {
                let {store} = this.context,
                    state = store.getState(),
                    propsState = typeof mapStateToProps === 'function' ? mapStateToProps(state) : {},
                    propsDispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(store.dispatch) : {};
                return {
                    ...propsState,
                    ...propsDispatch
                }
            };

            componentWillMount() {
                this.context.store.subscribe(() => {
                    this.setState(this.queryMountProps());
                });
            };

            // 渲染component组件。并且把获取的信息挂载到组件的属性上
            render() {
                return <Component {...this.state} {...this.props}/>
            }
        }
    }
};

connect(mapStateToProps, mapDispatchToProps);

export {
    Provider,
    connect
}
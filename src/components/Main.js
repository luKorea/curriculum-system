import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Main extends Component {

    // 设置 props 的默认值
    static defaultProps = {
      content: '这是首页的内容'
    };

    // 组件传递的属性设置规则
     static propTypes = {
       footer: PropTypes.string.isRequired,
       content: PropTypes.string,
     };

    render() {
        let {content, children, footer} = this.props;
        return (<div>
            <span>{content}</span>
            {children}
            <span>{footer}</span>
        </div>)
    }
}

export default Main
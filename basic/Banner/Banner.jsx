import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {

    constructor(props) {
        super(props);
        let {speed, step} = this.props;
        this.state = {
            speed, // 时间
            step
        }
    }

    static defaultProps = {
      data: {},
      speed: 300,
      step: 1,
      interval: 1000
    };
    static propTypes = {
      data: PropTypes.array,
      step: PropTypes.number,
      speed: PropTypes.number,
      interval: PropTypes.number,
    };

    componentWillMount() {
        let {data} = this.props,
            cloneData = data.slice(0);
        cloneData.unshift(data[0]); // 克隆第一张
        cloneData.push(data[data.length - 1]);  // 克隆最后一张
        this.cloneData = cloneData;
    }

    // 自动轮播
    componentDidMount() {
        // 把定时器返回值挂载到实例上，方便后去清理，结束自动轮播
        this.autoTimer = setInterval(this.autoMove, this.props.interval)
    }

    render() {
        let {data} = this.props,
            {cloneData} = this;
        if (data.length === 0) return '';

        // 控制wrapper的样式

        let {speed, step} = this.state,
            wrapperStyle = {
                width: cloneData.length * 1000 + 'px',
                left: -step * 1000 + 'px',
                transaction: `all ${speed}ms linear 0ms`
            };
        return (<section className='container'>
            {/*图片区域*/}
            <ul className='wrapper' style={wrapperStyle}>
                {
                    cloneData.map((item, index) => {
                        let {title, src} = item;
                        return (
                            <li key={index}><img src={src} alt={title}/></li>
                        )
                    })
                }
            </ul>
            {/*小按钮区域*/}
            <ul className='focus'>
                {
                    data.map((item, index) => {
                        let {id} = item;
                        return <li key={index}>{id}</li>
                    })
                }
            </ul>
            {/*左右按钮*/}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className='arrow arrowLeft'>左边按钮</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className='arrow arrowRight'>右边按钮</a>
        </section>);
    }

    // 向右切换
    autoMove = () => {
        this.setState({
            step: this.props.step + 1
        })
    }
}

export default Banner;
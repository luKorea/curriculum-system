import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Carousel, Icon, List, Button} from 'antd';
import {Link} from 'react-router-dom';

import action from '../../store/action';

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    async componentDidMount() {
        let {bannerInfo, getBanner, courseInfo, getListInfo} = this.props;
        if (!bannerInfo || bannerInfo.length === 0) {
            getBanner();
        }
        if (courseInfo.data.length === 0) {
            getListInfo({});
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            isLoading: false
        });
    }

    queryType = () => {
        let {courseType} = this.props,
            text = '全部课程';
        // eslint-disable-next-line default-case
        switch (courseType) {
            case 'react':
                text = 'react课程';
                break;
            case 'vue':
                text = 'vue课程';
                break;
            case 'xiaochengxu':
                text = '小程序课程';
                break;
        }
        return text;
    };
    loadMore = () => {
        let {getListInfo, courseInfo, courseType} = this.props;
        // 防止重复点击
        if (this.state.isLoading) return;
        this.setState({
            isLoading: true
        });
        // 重新发送新的dispatch
        getListInfo({
            page: courseInfo.page + 1,
            type: courseType,
            flag: 'push'
        })
    };

    render() {
        let {bannerInfo, courseInfo} = this.props,
            {data} = courseInfo;
        console.log(this.props);
        return <section className='course-list-box'>
            {
                bannerInfo && bannerInfo.length !== 0
                    ? (<Carousel autoplay>
                        {
                            bannerInfo.map(item => {
                                let {pic, id, name} = item;
                                return <div className="img-box" key={id}>
                                    <img src={pic} alt={name}/>
                                </div>
                            })
                        }
                    </Carousel>)
                    : null
            }

            <div className="course-info-box">
                <Icon type='menu' style={{marginRight: '.1rem'}}/><span>{this.queryType()}</span>
                {
                    data && data.length !== 0
                        ? (<div>
                            <List
                                itemLayout="vertical"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item
                                        key={item.name}
                                        extra={
                                            <img
                                                width={335}
                                                height={150}
                                                alt="logo"
                                                src={item.pic}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            title={<Link to={{
                                                pathname: '/course/details',
                                                search: `?courseId=${item.id}`
                                            }}>{item.name}</Link>}
                                            description={item.dec}
                                        />
                                    </List.Item>
                                )}
                            />
                            {
                                courseInfo.total <= courseInfo.page ? ''
                                    : <Button type="link" block
                                            onClick={this.loadMore}
                                            loading={this.state.isLoading}
                                    >
                                        加载更多
                                    </Button>
                            }
                        </div>)
                        : <div style={{textAlign: 'center'}}>暂无数据</div>
                }

            </div>
        </section>
    }
}

export default connect(state => ({...state.course}), action.course)(CourseList);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Carousel } from 'antd';


import action from '../../store/action';

class List extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let {bannerInfo, getBanner} = this.props;
        if (!bannerInfo || bannerInfo.length === 0) {
            getBanner();
        }
    }

    render() {
        let {bannerInfo} = this.props;
        return <section className='course-list-box'>
            {
                bannerInfo && bannerInfo.length !== 0
                    ? (<Carousel autoplay>
                    {
                        bannerInfo.map(item => {
                            let {pic, id, name} = item;
                            return  <div className="img-box" key={id}>
                                <img src={pic} alt={name} />
                            </div>
                        })
                    }
                </Carousel>)
                    : null
            }
        </section>
    }
}

export default connect(state => ({...state.course}), action.course)(List);
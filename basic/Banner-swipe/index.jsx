import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import './index.less';

let IMG_DATA = [];
for (let i = 1; i <= 3; i++) {
    IMG_DATA.push({
        id: `img-${i}`,
        title: `img${i}`,
        src: require(`./image/img${i}.webp`)
    })
}

class Index extends Component {
    render() {
        return <ReactSwipe
            className={'container'}
            swipeOptions={{
                auto: 3000
            }}
        >
            {
                IMG_DATA.map((item, index) => {
                    let {id, title, src} = item;
                    return (<div key={id}>
                        <img src={src} alt={title} title={title}/>
                    </div>)
                })
            }
        </ReactSwipe>;
    }
}

export default Index;
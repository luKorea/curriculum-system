import React, {Component} from "react";
import Banner from "./components/Banner";

let IMG_DATA = [];
for (let i = 1; i<= 3; i++) {
    IMG_DATA.push({
        id: i,
        src: require(`./static/image/img${i}.webp`),
        title: `图片${i}张`
    })
}

class App extends  Component{
    render() {
        return (
            <div>
                <Banner data={IMG_DATA} step={1} speed={300} interval={1000}/>
            </div>
        )
    }
}

export default App;
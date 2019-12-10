import React, {Component} from "react";
import Main from './components/Main';

class App extends  Component{
    render() {
        return (
            <div>
                <Main footer='这是底部的内容'>
                    <div>这是主体内容</div>
                </Main>
            </div>
        )
    }
}

export default App;

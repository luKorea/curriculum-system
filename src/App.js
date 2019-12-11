import React, {Component} from "react";
import LifeCycle from './components/LifeCycle';

class App extends  Component{
    render() {
        return (
            <div>
                <span>这是首页</span>
                <LifeCycle />
            </div>
        )
    }
}

export default App;
import React, {Component} from 'react';
import UserInfo from "./components/UserInfo";

class App extends Component {
    render() {
        return (
            <UserInfo store={this.props.store}/>
        )
    }
}

export default App;
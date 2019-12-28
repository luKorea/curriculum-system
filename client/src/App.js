import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

// antd-design
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

// component
import NavTop from './components/NavTop';
import NavBottom from "./components/NavBottom";
import Home from "./routes/Home";
import MyCourse from "./routes/MyCourse";
import Personal from "./routes/Personal";

// css-style
import './static/css/reset.min.css';
import './static/css/common.less';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <ConfigProvider locale={zhCN}>
                  <div>
                      {/*header*/}
                      <NavTop />
                      {/*main*/}
                      <main className="container-box">
                          <Switch>
                              <Route path={'/course'} component={Home}/>
                              <Route path={'/mycourse'} component={MyCourse}/>
                              <Route path={'/personal'} component={Personal}/>
                              <Redirect  to={'/course'}/>
                          </Switch>
                      </main>
                      {/*footer*/}
                      <NavBottom />
                  </div>
                </ConfigProvider>
            </HashRouter>
        )
    }
}

export default App;
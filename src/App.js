import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu';
class App extends Component {
showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
        result = routes.map((route,index)=>{
            return(
                <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
            )
        });
    }
    return result;
}
render() {
    return (
        <Router>
            <div className="App">
                <Menu></Menu>
                <Switch>
                    {this.showContentMenus(routes)}
                </Switch>
            </div>
        </Router>
    );
}
}
export default App;
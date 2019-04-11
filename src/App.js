import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
var MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={`my-li ${active}`}>
                    <NavLink to={to} className="my-link">{label}</NavLink>
                </li>
            )
        }}></Route>
    )
};
class App extends Component {
render() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <MenuLink to="/" label="Trang chủ" activeOnlyWhenExact={true}></MenuLink>
                        <MenuLink to="/about" label="Giới thiệu" activeOnlyWhenExact={false}></MenuLink>
                        <MenuLink to="/contact" label="Liên hệ" activeOnlyWhenExact={false}></MenuLink>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </Router>
    );
}
}
export default App;

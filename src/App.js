import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
var MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
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
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </div>
        </Router>
    );
}
}
export default App;

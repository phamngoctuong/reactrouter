import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/*Menu*/}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active" 
                            >
                                <NavLink 
                                    to="/" 
                                    exact
                                    className="my-link"
                                    activeStyle={{
                                        backgroundColor: "#7b7777"
                                    }}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className="my-link"
                                    activeStyle={{
                                        backgroundColor: "#7b7777"
                                    }}
                                >About</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className="my-link"
                                    activeStyle={{
                                        backgroundColor: "#7b7777"
                                    }}
                                >Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/*Content*/}
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>
            </Router>
        );
    }
}
export default App;

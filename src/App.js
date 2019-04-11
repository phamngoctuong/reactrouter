import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
                            <li className="active">
                                <Link to="/" className="my-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="my-link">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="my-link">Contact</Link>
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

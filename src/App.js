import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/*Menu*/}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </nav>
                    {/*Content*/}
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </Router>
        );
    }
}
export default App;

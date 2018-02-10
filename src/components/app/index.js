import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import Family from '../family';
import Nav from '../nav';

import './style.sass';

class App extends Component {
    componentDidCatch(err, info) {
        console.log(err, info);
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route path='/:whom?' component={Family}/>
                </div>
            </Router> 
        );
    }
}

export default App;

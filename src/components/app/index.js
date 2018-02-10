import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Family from '../family';

class App extends Component {
    componentDidCatch(err, info) {
        console.log(err, info);
    }

    render() {
        return (
            <Router>
                <Route exact path='/' component={Family}/>
            </Router> 
        );
    }
}

export default App;

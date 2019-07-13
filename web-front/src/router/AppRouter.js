import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AdminIndex from '../admin/AdminIndex';
import About from '../front/components/about/About';
import FrontIndex from '../front/components/FrontIndex';

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={FrontIndex} />
                <Route path="/about" component={About} />
                <Route path="/admin" component={AdminIndex} />
            </div>
        </Router>
    )
}

export default AppRouter;
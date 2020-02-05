import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createGlobalStyle } from "styled-components"

import Navigation from './components/Navigation'
import Home from './pages/Home'
import App from './pages/App';
import Pricing from './pages/About'

import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    body{
        background: url(https://wallpaperaccess.com/full/696233.jpg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

`

const Routing: React.FC = () => (
    <div>
        <Navigation/>

        <Router>
            <Switch>
                <Route path="/about">
                    <Pricing />
                </Route>
                <Route path="/app">
                    <App/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
)

ReactDOM.render(
    <div>
        <GlobalStyle/>
        <Routing/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

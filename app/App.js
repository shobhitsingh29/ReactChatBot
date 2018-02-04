import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

 import Header from './containers/Header';
/*
 import Home from './containers/Home';
 import AdminPanel from './containers/AdminPanel';
 import NotFound from './components/NotFound';*/
import Wrapper from "./containers/wrapper"

const App = () => (
    <div>
        <Wrapper/>
    </div>
);

export default App;


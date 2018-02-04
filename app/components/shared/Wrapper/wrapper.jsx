import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../../../containers/Home';
import AdminPanel from '../../../containers/AdminPanel';
import NotFound from '../../NotFound/index';
import Header from '../../../containers/Header';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getSocket();
    }

    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <Switch>
                        <Redirect exact from='/' to='/home'/>
                        <Route path='/home' component={Home}/>
                        <Route path='/admin' component={AdminPanel}/>
                        <Route path='/404' component={NotFound}/>
                        <Redirect from='*' to='/404'/>
                    </Switch>
                </div>
            </Router>);
    }
}

export default Wrapper;

import React from "react";
import config from '../../config'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

const {API: {protocols, domain, imagePath}} = config;
import _ from "lodash";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleDropdown: "dropdown",
            currentUser: () => {
                if (!_.isEmpty(JSON.parse(window.localStorage.getItem("user")))) {
                    return JSON.parse(window.localStorage.getItem("user")).user.name
                }
            }
        }

    }

    handlePanel = () => {
        if (this.state.handleDropdown == "open")
            this.setState({handleDropdown: "close"});
        else
            this.setState({handleDropdown: "open"});

    };
    logout = () => {
        const {socket} = this.props;
        this.props.logout(this.props.user);
        //socket.emit('admin-logout');
        this.setState({handleDropdown: "close"});
    };

    render() {
        return (
            <nav className="navbar navbar-inverse container" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href='/home'>Saxo Bank</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav navbar-right">
                            <li className={`dropdown ${this.state.handleDropdown}`}>
                                <a className="dropdown-toggle" data-toggle="dropdown"
                                   onClick={this.handlePanel}>{this.state.currentUser() || "user"}<b
                                    className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li align="center" className="well">
                                        <div><img className="img-responsive" style={{"padding": "2%"}}
                                                  src="http://placehold.it/120x120"/><a className="change" href="">Change
                                            Picture</a></div>
                                        <a className="btn btn-sm btn-default"><span
                                            className="glyphicon glyphicon-lock"></span> Security</a>
                                        <Link to="./home" className="btn btn-sm btn-default" onClick={this.logout}><span
                                            className="glyphicon glyphicon-log-out"></span> Logout</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header

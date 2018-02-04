import React from "react";
import DynamicStep from "../DynamicStep";

export class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.details = {
            userid: '',
            password: '',
            email: '',
            name: this.props.name ? this.props.name : ""
        };
        this.state = {
            showForm: true
        }
    }

    onChange = (type, evt) => {
        switch (type) {
            case 'userid':
                this.details.userid = Number(evt.target.value);
                break;
            case 'password':
                this.details.password = evt.target.value;
                break;
            case 'email':
                this.details.email = evt.target.value;
                break;
            case 'name':
                this.details.name = evt.target.value;
                break;
            default:
                break;
        }

    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.addUser(this.details);
    }

    componentWillReceiveProps(nextProps, prv) {
        if (!_.isEmpty(nextProps.user) && !_.isEmpty(nextProps.user.isAdmin))
            nextProps.history.push('/admin');
        else if(!_.isEmpty(nextProps.user)){
            this.setState({showForm : false});
        }
    }

    render() {
        return (
            <div className="response">
                {this.state.showForm ?
                    <div className="message-text">
                        { this.props.option ? (
                            <div>
                                <form className="form-horizontal" onSubmit={this.onSubmit}>
                                    <h5> Hi, <span className="user-form-header">{this.props.userName}</span>
                                        <br/>
                                        <p>Please enter the credentials
                                        </p></h5>
                                    <div style={{"marginBottom": "25px"}} className="input-group">
                                    <span className="input-group-addon"><i
                                        className="glyphicon glyphicon-user"></i></span>
                                        <input className="form-control" defaultValue="" placeholder="name"
                                               onChange={this.onChange.bind(this,'name')}/>
                                    </div>
                                    <div style={{"marginBottom": "25px"}} className="input-group">
                                    <span className="input-group-addon"><i
                                        className="glyphicon glyphicon-user"></i></span>
                                        <input className="form-control" defaultValue="" placeholder="userid"
                                               onChange={this.onChange.bind(this,'userid')}/>
                                    </div>
                                    <div style={{"marginBottom": "25px"}} className="input-group">
                                    <span className="input-group-addon"><i
                                        className="glyphicon glyphicon-lock"></i></span>
                                        <input type="password" className="form-control" defaultValue=''
                                               placeholder="password"
                                               onChange={this.onChange.bind(this,'password')}/>
                                    </div>
                                    <div style={{"marginTop":"10px"}} className="form-group">
                                        <div className="col-sm-12 controls">
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                or
                                <br></br>
                                <br></br>
                                <form className="form-horizontal" onSubmit={this.onSubmit}>
                                    <div style={{"marginBottom": "25px"}} className="input-group">
                                    <span className="input-group-addon"><i
                                        className="glyphicon glyphicon-user"></i></span>
                                        <input className="form-control" defaultValue="" placeholder="name"
                                               onChange={this.onChange.bind(this,'name')}/>
                                    </div>
                                    <div style={{"marginBottom": "25px"}} className="input-group">
                            <span className="input-group-addon"><i
                                className="glyphicon glyphicon-user"></i></span>
                                        <input className="form-control" defaultValue="" placeholder="email"
                                               onChange={this.onChange.bind(this,'email')}/>
                                    </div>
                                    <div style={{"marginTop":"10px"}} className="form-group">
                                        <div className="col-sm-12 controls">
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>) : (
                            <form className="form-horizontal" onSubmit={this.onSubmit}>

                                <div style={{"marginBottom": "25px"}} className="input-group">
                                    <span className="input-group-addon"><i
                                        className="glyphicon glyphicon-user"></i></span>
                                    <input className="form-control" defaultValue="" placeholder="email"
                                           onChange={this.onChange.bind(this,'email')}/>
                                </div>
                                <div style={{"marginTop":"10px"}} className="form-group">
                                    <div className="col-sm-12 controls">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </form>)
                        }
                    </div>
                    :
                    <div className="message-text">
                        <p>Thank you for your information.</p>
                    </div>
                }
            </div>
        );
    }
}

export default InputForm;


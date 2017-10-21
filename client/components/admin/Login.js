import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmitA = this.handleSubmitA.bind(this);
    }


    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }



    handleEmailChange(event) {

        this.setState({
            email: event.target.value
        });

    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmitA(event) {
        event.preventDefault();

    }



    render() {

        let email = this.state.email;
        let password = this.state.password;

        return (
            <div className="Login">
                <form >
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick={(e)=>this.props.onClick(e,email,password)}
                    >
                        Login
                    </Button >
                </form>
            </div>
        );
    }
}
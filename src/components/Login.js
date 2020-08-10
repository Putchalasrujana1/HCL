import React, { Component } from 'react';
import User from '../model/User';
import axios from 'axios';

class Login extends Component {

    user: User
    userPasswordRef
    userMobileRef
    

    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            passwordError: false,
            phoneNumberError: false,
            displayFlag: false,
            disabledFlag: true,
            pwdCharError: false
        }
    }

    handleSubmit(event) {
        //alert('Welcome, ' + this.state.user.userName)
        this.setState({
            displayFlag: true
        })
        console.log("success");
        event.preventDefault();
        axios.post("http://localhost:8082/user/signin", this.state.user)
            .then(response => {
                this.setState({
                    successFlag: (response.status === 200) ? true : false
                })
                this.user = new User()
                this.setState({ user: this.user })
            })
        console.log(this.user)
    }

    handlePasswordChange() {
        this.user.userPassword = this.userPasswordRef.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            disabledFlag: (this.user.userPassword === "" || this.user.userMobile === "") ? true : false,
            pwdCharError: (this.user.userPassword.length < 6) ? true : false,
        })
    }

    handlePhoneNumberChange() {
        this.user.userMobile = this.userMobileRef.value
        this.setState({
            user: this.user,
            phoneNumberError: (this.user.userMobile === "") ? true : false,
            disabledFlag: (this.user.userPassword === "" || this.user.userMobile === "") ? true : false,
            minDigitError: (this.user.userMobile.length !== 10) ? true : false,
            //numberError: (isNaN(this.user.phoneNumber))?true:false
        })
    }

   

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3 my-4">
                    <p className="display-4 text-center mb-0 text-info">Login</p>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset>
                        <div className="form-group">
                            <label >Phone Number</label>
                            <input type="text" className="form-control" placeholder="Phone Number" id="phonenumber" ref={(input) => this.userMobileRef = input} value={this.state.user.userMobile} onChange={() => this.handlePhoneNumberChange()} />
                            {(this.state.phoneNumberError) ?
                                <div className="alert alert-danger" role="alert">Phone Number can't be empty</div> : null
                            }
                            {(this.state.minDigitError) ?
                                <div className="alert alert-danger" role="alert">Phone Number should contain 10 digits</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="password" ref={(input) => this.userPasswordRef = input} value={this.state.user.userPassword} onChange={() => this.handlePasswordChange()} />
                            {(this.state.passwordError) ?
                                <div className="alert alert-danger" role="alert">Password can't be empty</div> : null
                            }
                            {(this.state.pwdCharError) ?
                                <div className="alert alert-danger" role="alert">Password should contain minimum 6 characters</div> : null
                            }
                        </div>
                        <button className="btn btn-success" type="submit" disabled={this.state.disabledFlag}>SignUp</button>
                    </fieldset>
                </form>
                {
                    (this.state.displayFlag) ?
                        <div className="alert alert-success mt-3" role="alert">
                            Successfully Login.
                     </div>
                        : null
                }
            </div>
        );
    }
}

export default Login;

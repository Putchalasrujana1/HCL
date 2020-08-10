import React, { Component } from 'react';
import axios from 'axios';
import User from '../model/User';
import { connect } from 'react-redux';
import {userRegister} from '../actions/allActions';

class Register extends Component {

    user: User
    userNameRef
    userEmailRef
    userPasswordRef
    confirmPasswordRef
    userAddressRef
    userMobileRef
    userPincodeRef
    componentDidMount() {
        this.props.userRegister();
      }

    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            emailError: false,
            passwordError: false,
            confirmPasswordError: false,
            phoneNumberError: false,
            userNameError: false,
            addressError: false,
            userPincodeError: false,
            minDigitError1: false,
            displayFlag: false,
            disabledFlag: true
        }
    }

    handleSubmit(event) {
        //alert('Welcome, ' + this.state.user.userName)
        this.setState({
            displayFlag: true
        })
        console.log("success");
        event.preventDefault();
        axios.post("http://localhost:8082/user/signup", this.state.user)
            .then(response => {
                this.setState({
                    successFlag: (response.status === 200) ? true : false
                })
                this.user = new User()
                this.setState({ user: this.user })
            })
            console.log(this.user);
    }

    handleEmailChange(event) {
        // this.user.email = this.emailRef.value

        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            emailError: (this.user.userEmail === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
        })
    }

    handleUserNameChange() {
        this.user.userName = this.userNameRef.value
        this.setState({
            user: this.user,
            userNameError: (this.user.userName === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
            minCharError: (this.user.userName.length < 6) ? true : false,
        })
    }

    handlePasswordChange() {
        this.user.userPassword = this.userPasswordRef.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
            pwdCharError: (this.user.userPassword.length < 6) ? true : false,
        })
    }

    handleConfirmPasswordChange() {
        this.user.confirmPassword = this.confirmPasswordRef.value
        this.setState({
            user: this.user,
            confirmPasswordError: (this.user.confirmPassword === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
            validPasswordError: (this.user.userPassword !== this.user.confirmPassword) ? true : false,
        })
    }
    handleAddressChange() {
        this.user.userAddress = this.userAddressRef.value
        this.setState({
            user: this.user,
            addressError: (this.user.userAddress === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
        })
    }

    handlePhoneNumberChange() {
        this.user.userMobile = this.userMobileRef.value
        this.setState({
            user: this.user,
            phoneNumberError: (this.user.userMobile === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
            minDigitError: (this.user.userMobile.length !== 10) ? true : false,
            //numberError: (isNaN(this.user.phoneNumber))?true:false
        })
    }

    handlePincodeChange() {
        this.user.userPincode = this.userPincodeRef.value
        this.setState({
            user: this.user,
            userPincodeError: (this.user.userPincode === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false,
            minDigitError1: (this.user.userPincode.length !== 5) ? true : false,
            //numberError: (isNaN(this.user.phoneNumber))?true:false
        })
    }
    /* disabledFlagCheck() {
        this.setState({
            disabledFlag: (this.user.userName === "" || this.user.email === "" || this.user.password === "" || this.user.confirmPassword === "" || this.user.age === "" || this.user.phoneNumber === "") ? true : false,
        })
    } */

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3 my-4">
                    <p className="display-4 text-center mb-0 text-info">Sign Up</p>
                </div>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" placeholder="Enter User Name" id="username" ref={(input) => this.userNameRef = input} value={this.state.user.userName} onChange={() => this.handleUserNameChange()} />
                            {(this.state.userNameError) ?
                                <div className="alert alert-danger" role="alert">User Name can't be empty</div> : null
                            }
                            {(this.state.minCharError) ?
                                <div className="alert alert-danger" role="alert">User Name should contain minimum 6 characters</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" placeholder="Enter email" id="email" ref={(input) => this.userEmailRef = input} value={this.state.user.userEmail} onChange={(event) => this.handleEmailChange(event)} />
                            {/* ref={(input) => this.emailRef = input} */}
                            {(this.state.emailError) ?
                                <div className="alert alert-danger" role="alert">Email can't be empty</div> : null
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
                        <div className="form-group">
                            <label >Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpassword " placeholder="Confirm Password" ref={(input) => this.confirmPasswordRef = input} value={this.state.user.confirmPassword} onChange={() => this.handleConfirmPasswordChange()} />
                            {(this.state.validPasswordError) ?
                                <div className="alert alert-danger" role="alert">Password and confirm Password should be same</div> : null
                            }
                            {(this.state.confirmPasswordError) ?
                                <div className="alert alert-danger" role="alert">Confirm Password can't be empty</div> : null
                            }
                        </div>
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
                            <label >Pincode</label>
                            <input type="text" className="form-control" placeholder="Pincode" id="pincode" ref={(input) => this.userPincodeRef = input} value={this.state.user.userPincode} onChange={() => this.handlePincodeChange()} />
                            {(this.state.userPincodeError) ?
                                <div className="alert alert-danger" role="alert">Pincode can't be empty</div> : null
                            }
                            {(this.state.minDigitError1) ?
                                <div className="alert alert-danger" role="alert">Pincode should contain atleast 5 digits</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label >Address</label>
                            <textarea type="text" className="form-control" placeholder="Enter Address" id="address" ref={(input) => this.userAddressRef = input} value={this.state.user.userAddress} onChange={() => this.handleAddressChange()} />
                            {(this.state.addressError) ?
                                <div className="alert alert-danger" role="alert">Address can't be empty</div> : null
                            }
                        </div>
                        <button className="btn btn-success" type="submit" disabled={this.state.disabledFlag}>SignUp</button>
                    </fieldset>
                </form>
                {
                    (this.state.displayFlag) ?
                        <div className="alert alert-success mt-3" role="alert">
                            Successfully Registered.
                         </div>
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.reducer.users
  });
  
export default connect(mapStateToProps, { userRegister })(Register)

import React from 'react';
import { FormErrors } from './FormErrors';

class Form extends  React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handlePasswordChange = (event) => {
        console.log('handlePasswordChange', this);
        this.setState({password: event.target.value});

    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    };

    validateForm = () => {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('password', this.state.password);

        fetch('/api/user',{
            headers: {
                'Content-type': 'application/json'
            },
            metod: 'post',
            body: JSON.stringify()
        });
    };
    errorClass = (error) => {
        return(error.length === 0 ? '' : 'has-error');
    };

    render() {
        return(
            <div className="FormWrapper">
                <h2>Welcome <span>back!</span></h2>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <i className="fa fa-user"></i>
                        <input type="email" name="email" placeholder="Username" className="userName"
                               value={this.state.email}
                               onChange={this.handleUserInput}/>
                    </div>
                    <div className={`form-group PasswordWrapper ${this.errorClass(this.state.formErrors.password)}`}>
                        <i className="fa fa-unlock-alt"></i>
                        <input type="password" name="password" placeholder="Password" className="Password"
                               value={this.state.password}
                               onChange={this.handleUserInput}/>
                    </div>
                    <button type="submit" className="submitButton" disabled={!this.state.formValid}><p>Enter</p><i className="fa fa-chevron-right"></i></button>
                </form>
            </div>
        );
    }
}
export  default Form;
import React, { Component} from "react";
import ReactPhoneInput from "react-phone-input-2";
import './index.css';
import './InputForm.css';
import 'react-phone-input-2/lib/bootstrap.css';
import api from './api.js';
import validator from "validator";

const validateForm = (inputs, errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // If there is an error String, set valid to false
        (val) => val.length > 0 && (valid = false)  
    );
    Object.values(inputs).forEach(
        (val) => val.length === 0 && (valid = false)
    );

    return valid;
}

class InputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            btnColor: 'lightblue',
            disabled: true,
            succeeded: false,
            failed: false,
            valid: false,
            error: null,
            errors: {
                sender_name: '',
                sender_number: '',
                sender_message: ''    
            },
            inputs: {
                sender_name: '',
                sender_number: '',
                sender_message: ''
            }
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumberChange = value => {
        let inputs = this.state.inputs;
        let errors = this.state.errors;

        inputs.sender_number = value;

        console.log(inputs.sender_number);

        let validation = validator.isMobilePhone(inputs.sender_number);

        console.log(validation);    

        errors.sender_number = 
            validation
            ? ''
            : "This is likely not a valid number and you can't submit it, please check it.";

        if(validateForm(this.state.inputs, this.state.errors)) {
            console.log('Valid Form');
            this.setState({
                valid: true,
                disabled: false,
                btnColor: 'blue'
            })
        } else {
            console.log('Invalid form');
            this.setState({
                valid: false,
                disabled: true,
                btnColor: 'lightblue'
            })
        }
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        let inputs = this.state.inputs;

        switch (name) {
            case 'sender_name':
                errors.sender_name = 
                    value.length < 2
                    ? 'Name must contain at least two characters.'
                    : '';
                inputs.sender_name = value;
                break;
            case 'sender_message':
                errors.sender_message =
                    value.length > 280
                    ? 'Messages need to be <280 characters. No `War and Peace`, please.'
                    : '';
                inputs.sender_message = value;    
                break;
            default:
                break;
        }

        this.setState({errors, inputs});

        if(validateForm(this.state.inputs, this.state.errors)) {
            console.log('Valid Form');
            this.setState({
                valid: true,
                disabled: false,
                btnColor: 'blue'
            })
        } else {
            console.log('Invalid form');
            this.setState({
                valid: false,
                disabled: true,
                btnColor: 'lightblue'
            })
        }
    }

    async handleSubmit(ev){
        ev.preventDefault();

        api
        .send_sms({
            name: this.state.inputs.sender_name,
            number: this.state.inputs.sender_number,
            message: this.state.inputs.sender_message
        })
        .then(payload => {
            if (payload.error) {
                this.setState({
                    error: `Sending failed: ${payload.error.message}`,
                    disabled: false,
                    proessing: false
                });
                console.log("Error", payload.error);
            } else {
                this.setState({
                    succeeded: true,
                    error: "",
                });
                console.log("Success!")
            }
        })
        .catch(err => {
            this.setState({
                error: err.message,
                failed: true,
                processing: false
            });
            console.log(err);
        });
    }

    renderSuccess() {
        return (
          <div className="sr-field-success message">
            <h3>Message sent!</h3>
            <p>Refresh to send another.</p>
          </div>
        );
      }

    renderForm() {
        var style = {
            base: {
              color: "#32325d",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a"
            }
          };

        const {errors} = this.state

        return (
            <div className="full-container vertical-center">
                <form onSubmit={this.handleSubmit}>
                    <h2>Just like using your phone...</h2>
                    <h3>...except a web app...</h3>
                    <h4>...and also dumber.</h4>
                    <h5>Enter your details and message below, then hit send to SMS {process.env.REACT_APP_MY_NAME}.</h5>
                    <div className="sr-combo-inputs" style={style}>
                        <div className="sr-combo-inputs-row">
                            <p className="no-margin-bottom text-left">Your name:</p>
                            <input
                                type="text"
                                name="sender_name"
                                placeholder={`Name - This will tell ${process.env.REACT_APP_MY_NAME} who's texting.`}
                                className="sr-input"
                                autoComplete="cardholder"
                                onChange={this.handleChange}
                            />
                            {errors.sender_name.length > 0 && <span style={{color:'red'}}>{errors.sender_name}</span>}
                            <p className="no-margin-bottom text-left">Your number (US only at the moment):</p>
                            <p className="no-margin-bottom text-left"><i>(Getting this input component to be the same width as the others is beyond me. Any help warmly appreciated!)</i></p>

                            <ReactPhoneInput
                                name="sender_number"
                                className="react-tel-input"
                                country="us"
                                enableAreaCodes={true}
                                autoComplete="cardholder"
                                value={this.state.inputs.sender_number}
                                onChange={this.handleNumberChange}
                            />
                            {errors.sender_number.length > 0 && <span style={{color:'red'}}>{errors.sender_number}</span>}
                            <p className="no-margin-bottom text-left">Your message:</p>
                            <textarea
                                type="text"
                                name="sender_message"
                                placeholder="280 character max. Brevity is the soul of wit."
                                className="sr-input"
                                autoComplete="cardholder"
                                onChange={this.handleChange}
                            />
                            {errors.sender_message.length > 0 && <span style={{color:'red'}}>{errors.sender_message}</span>}
                        <div className="pad-bottom" style={{color:'red', padding: 5}}>
                            {this.state.failed ? "Sending message failed. Try again." : null}
                        </div>
                        </div>
                        {!this.state.succeeded && (
                            <button
                                className="btn"
                                disabled={this.state.disabled}
                                style={{
                                    backgroundColor : this.state.btnColor,
                                    border: this.state.btnColor}}
                            >
                                {this.state.failed ? "Try again." : "Send"}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        ) 
    }

    render() {
        return (
            <div>
                {this.state.succeeded && this.renderSuccess()}
                {!this.state.succeeded && this.renderForm()}
            </div>
        );
    }
    
}

export default InputForm;

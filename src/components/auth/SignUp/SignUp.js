import React, { useState } from 'react';
import './SignUp.scss';
import InputField from '../../common/InputField/InputField';
import { FormControl, Icon, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Alert from '../../common/Alert/Alert';
import { useDispatch } from 'react-redux';
import { loadingSpinner } from '../../../store/actions/signUpActions';

const SignUp = ({history}) => {
    const [errorAlert, setErrorAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);

    const dispatch = useDispatch();
    
    const errorMessages = (validationType, payload) => {
        switch(validationType) {
            case 'required':
                return `The field ${payload} is required!`;
            case 'minLength':
                return `At least ${payload} characters are required`;
            case 'maxLength':
                return `At least ${payload} characters are required`;
            case 'emailRegex':
                return `The ${payload} address must contain the name, @ and the domain.`;
        default:
            return 'Error';
        };
    };

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = ({password, confirmPassword}) => {
        signUpValidation(password, confirmPassword)
    };

    const signUpValidation = (pw, confirmPw) => {
        if(pw === confirmPw) {
            console.log('work')
            setErrorAlert(false);
            setSuccessAlert(true);

            dispatch(loadingSpinner('work'));

            setTimeout(() => {
                history.push('/login');
            }, 2500);
        } else {
            setErrorAlert(true);
        };
    };
    
    return(
        <section className="SignUp container">

            {
                successAlert && 
                    <Alert 
                        className="Alert__center Alert__absolute" 
                        severity="success" 
                        variant="filled" 
                        text="You are successfully logged into our system!"
                    />
            }

            {
                errorAlert && 
                    <Alert 
                        className="Alert__center Alert__absolute" 
                        severity="error" 
                        variant="filled" 
                        text="You are not successfully logged into our system!"
                    />
            }

            <h1 className="SignUp__title">Sign Up</h1>

            <form className="SignUp__form">
                <InputField
                    required
                    label="Full name" 
                    name="fullName" 
                    type="text" 
                    className="SignUp__input"
                    inputRef={register({ required: true})} 
                />

                {errors.fullName && <Alert severity="error" text={errorMessages('required', 'full name')} />}

                <InputField
                    required 
                    label="Email"
                    name="email" 
                    type="email" 
                    className="SignUp__input"
                    inputRef={register({ required: true, pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/})}   
                />

                {(errors.email && errors.email.type === 'required')  && <Alert severity="error" text={errorMessages('required', 'email')} />}

                {(errors.email && errors.email.type === 'pattern') && <Alert severity="error" text={errorMessages('emailRegex', 'email')} /> }

                <InputField
                    required
                    label="Password" 
                    name="password" 
                    type="password" 
                    className="SignUp__input"
                    inputRef={register({ required: true, minLength: 10 })}   
                />

                {(errors.password && errors.password.type === 'required') && <Alert severity="error" text={errorMessages('required', 'password')} />}

                {(errors.password && errors.password.type === 'minLength') && <Alert severity="error" text={errorMessages('minLength', 10)} />}

                <InputField
                    required
                    label="Confirm password" 
                    name="confirmPassword" 
                    type="password" 
                    className="SignUp__input"
                    inputRef={register({ required: true, minLength: 10 })}   
                />

                {(errors.confirmPassword && errors.confirmPassword.type === 'required') && <Alert severity="error" text={errorMessages('required', 'confirm password')} /> }

                {(errors.confirmPassword && errors.confirmPassword.type === 'minLength') && <Alert severity="error" text={errorMessages('minLength', 10)} />}

                <FormControl component="fieldset" required className="SignUp__checkbox">
                    <FormLabel component="legend" className="SignUp__checkbox__label">Type position</FormLabel>

                    <RadioGroup aria-label="type" name="type">
                        <FormControlLabel
                            label="Administrator" 
                            control={
                                <Radio 
                                    name="positionType" 
                                    value="administrator" 
                                    inputRef={register({required: true})} 
                                />}
                        /> 

                        <FormControlLabel
                            label="Employee" 
                            control={
                                <Radio 
                                    name="positionType" 
                                    value="employee" 
                                    inputRef={register({required: true})}             
                                />} 
                        />
                    </RadioGroup>
                </FormControl>
                
                {errors.positionType && <Alert severity="error" text={errorMessages('required', 'position')} />}

                <Button
                    className="SignUp__submit"
                    label="Sign Up" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={successAlert ? true : false}
                />
             </form>

             <h3 className="SignUp__have-account">Already have an ccount? <Link className="SignUp__login" to="/login">Login here</Link></h3>

        </section>
    );
};

export default SignUp;
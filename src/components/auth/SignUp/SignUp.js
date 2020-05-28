import React from 'react';
import './SignUp.scss';
import InputField from '../../common/InputField/InputField';
import { FormControl, Icon, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';

const SignUp = () => {
    const errorMessages = (validationType, payload) => {
        switch(validationType) {
            case 'required':
                return `The field ${payload} is required!`;
            case 'minLength':
                return `At least ${payload} characters are required`;
            case 'maxLength':
                return `At least ${payload} characters are required`;
        default:
            return 'Error';
        };
    };

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    
    return(
        <section className="SignUp container">
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

                {errors.fullName && <Alert severity="error">{errorMessages('required', 'full name')}</Alert>}

                <InputField
                    required 
                    label="Email"
                    name="email" 
                    type="email" 
                    className="SignUp__input"
                    inputRef={register({ required: true })}   
                />

                {errors.email && <Alert severity="error">{errorMessages('required', 'email')}</Alert>}

                <InputField
                    required
                    label="Password" 
                    name="password" 
                    type="password" 
                    className="SignUp__input"
                    inputRef={register({ required: true, minLength: 10 })}   
                />

                {(errors.password && errors.password.type === 'required') && <Alert severity="error">{errorMessages('required', 'password')}</Alert>}

                {(errors.password && errors.password.type === 'minLength') && <Alert severity="error">{errorMessages('minLength', 10)}</Alert>}

                <InputField
                    required
                    label="Confirm password" 
                    name="confirmPassword" 
                    type="password" 
                    className="SignUp__input"
                    inputRef={register({ required: true, minLength: 10 })}   
                />

                {(errors.confirmPassword && errors.confirmPassword.type === 'required') && <Alert severity="error">{errorMessages('required', 'confirm password')}</Alert>}

                {(errors.confirmPassword && errors.confirmPassword.type === 'minLength') && <Alert severity="error">{errorMessages('minLength', 10)}</Alert>}

                <FormControl component="fieldset" required>
                    <FormLabel component="legend">Type position</FormLabel>

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
                
                {errors.positionType && <Alert severity="error">{errorMessages('required', 'position')}</Alert>}

                <Button
                    className="SignUp__submit"
                    label="Sign Up" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                />
             </form>

             <h3 className="SignUp__have-account">Already have an ccount? <Link className="SignUp__login" to="/login">Login here</Link></h3>

        </section>
    );
};

export default SignUp;
import React, { useState } from 'react';
import './SignUp.scss';
import InputField from '../../common/InputField/InputField';
import { FormControl, Icon, InputLabel, Select, MenuItem} from '@material-ui/core';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        formValidation();
    };

    const formValidation = () => {
        alert('work')
    };
    
    return(
        <section className="SignUp container">
             <h1 className="SignUp__title">Sign Up</h1>

             <form>
                <div className="SignUp__fullname">
                    <InputField 
                        label="First name" 
                        type="text" 
                        className="SignUp__input" 
                        value={firstName}
                        required
                        onChange={e => setFirstName(e.target.value)} 
                    />

                    <InputField
                    required 
                        label="Last name" 
                        type="text" 
                        className="SignUp__input" 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <InputField
                    required 
                    label="Email" 
                    type="email" 
                    className="SignUp__input" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />

                <InputField
                    required 
                    label="Password" 
                    type="password" 
                    className="SignUp__input" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />

                <InputField
                    required 
                    label="Confirm password" 
                    type="password" 
                    className="SignUp__input" 
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)} 
                />
                
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" className="SignUp__select-label" required>Type</InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className="SignUp__input"
                        fullWidth
                    >
                        <MenuItem value={'administrator'}>Administrator</MenuItem>
                        <MenuItem value={'employee'}>Employee</MenuItem>
                    </Select>
                </FormControl>
                
                <Button
                    className="SignUp__submit"
                    label="Sign Up" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit}
                />
             </form>

             <h3 className="SignUp__have-account">Already have an ccount? <Link className="SignUp__login" to="/login">Login here</Link></h3>

        </section>
    );
};

export default SignUp;
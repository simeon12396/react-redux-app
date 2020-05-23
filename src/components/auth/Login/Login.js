import React, { useState } from 'react';
import './Login.scss';
import InputField from '../../common/InputField/InputField';
import { Icon } from '@material-ui/core';
import Button from '../../common/Button/Button';

const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({firstName, password, email})
    };

    return(
        <section className="Login container">
            <h1 className="Login__title">Login</h1>

            <form className="Login__form">
                <InputField 
                    label="First name" 
                    type="text" 
                    className="Login__input" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} 
                />

                <InputField 
                    label="Password" 
                    type="password" 
                    className="Login__input" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}  
                />

                <InputField 
                    label="Email" 
                    type="email" 
                    className="Login__input" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />

                <Button
                    className="Login__submit"
                    label="Submit" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit}
                />
            </form>
        </section>
    )
};

export default Login;
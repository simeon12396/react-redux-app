import React, { useState, useEffect } from 'react';
import './Login.scss';
import InputField from '../../common/InputField/InputField';
import { Icon } from '@material-ui/core';
import Button from '../../common/Button/Button';
import '../../../scss/_extends.scss';
import { Link } from 'react-router-dom';
import firebase from '../../../firebaseConfig/firebase';

const Login = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await firebase.firestore().collection('administrators').get();
            console.log(data.docs.map(doc => doc.data()));
        };

        fetchData();
    }, []);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({password, email})
    };

    return(
        <section className="Login container">
            <h1 className="Login__title">Login</h1>

            <form className="Login__form">
                <InputField 
                    label="Email" 
                    type="email" 
                    className="Login__input" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />

                <InputField 
                    label="Password" 
                    type="password" 
                    className="Login__input" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}  
                />

                <Button
                    className="Login__submit"
                    label="Login" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit}
                />
            </form>

            <div className="Login__hints">
                <h3 className="Login__forgot-pass">
                    <Link to="/">Forgot password?</Link>
                </h3>

                <h3 className="Login__create-account">Don't have an account? <Link className="Login__sign-up" to="/sign-up">Sign Up</Link></h3>
            </div>
        </section>
    )
};

export default Login;
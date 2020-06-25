import React, { useState, useEffect } from 'react';
import './Login.scss';
import InputField from '../../common/InputField/InputField';
import { Icon } from '@material-ui/core';
import Button from '../../common/Button/Button';
import '../../../scss/_extends.scss';
import { Link } from 'react-router-dom';
import { makeHttpRequest } from '../../../services/httpServices';
import { useForm } from "react-hook-form";
import Alert from '../../common/Alert/Alert';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/actions/loginActions';

const Login = ({history}) => {
    useEffect(() => {
        makeHttpRequest('get', 'registered-users').then(res => setRegisteredUsers(res));
    }, []);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [errorAlert, setErrorAlert] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = () => {

        registeredUsers.forEach(user => {
            if(user.data.email === email && user.data.password === password) {
                setErrorAlert(true);
                dispatch(loginUser({email, password, id: user.id}));
                setTimeout(() => {
                    history.push('/');
                }, 1500);
            };
        });
    };
    
    return(
        <section className="Login container">
            {
                errorAlert && 
                    <Alert 
                        className="Alert__center Alert__absolute" 
                        severity="success" 
                        variant="filled" 
                        text="You are successfully logged into our system!"
                    />
            }

            <h1 className="Login__title">Login</h1>

            <form className="Login__form">
                <InputField 
                    label="Email" 
                    type="email" 
                    className="Login__input" 
                    value={email}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    inputRef={register({ required: true, pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/})}    
                />

                {(errors.email && errors.email.type === 'required')  && <Alert severity="error" text='The field is required!' />}

                {(errors.email && errors.email.type === 'pattern') && <Alert severity="error" text='The email address must contain the name, @ and the domain.' /> }
                
                <InputField 
                    label="Password" 
                    type="password" 
                    className="Login__input" 
                    value={password}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    inputRef={register({ required: true })}    
                />

                {(errors.password && errors.password.type === 'required')  && <Alert severity="error" text='The field is required!' />}

                <Button
                    className="Login__submit"
                    label="Login" 
                    endIcon={<Icon>send</Icon>}
                    fullWidth={true}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={errorAlert ? true : false}
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
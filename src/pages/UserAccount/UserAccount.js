import React, { useState } from 'react';
import './UserAccount.scss';
import { useSelector } from 'react-redux';
import InputField from '../../components/common/InputField/InputField';
import Button from '../../components/common/Button/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeHttpRequest } from '../../services/httpServices';
import ProfilePicture from '../../images/profile_picture.jpg';

const UserAccount = () => {
    const getLoggedUserData= useSelector(state => state.login.loginUserData);
    const [fullName, setFullName] = useState(getLoggedUserData.fullName);
    const [email, setEmail] = useState(getLoggedUserData.email);
    const [positionType, setPositionType] = useState(getLoggedUserData.positionType);
    const [password, setPassword] = useState(getLoggedUserData.password);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        makeHttpRequest('put', 'logged-users', { fullName, email, password, confirmPassword: password, positionType }, getLoggedUserData.email);
        makeHttpRequest('put', 'registered-users', { fullName, email, password, confirmPassword: password, positionType }, getLoggedUserData.email);
    };

    const handleCancelEdit = () => {
        setFullName(getLoggedUserData.fullName);
        setEmail(getLoggedUserData.email);
        setPositionType(getLoggedUserData.positionType);
        setPassword(getLoggedUserData.password);
    };

    return(
        <div className="User-account container">
            <div className="User-account__img">
                <img src={ProfilePicture} alt="Default profile" />
            </div>

            <div className="User-account__information">
                <form>

                    <InputField 
                        label="Full name" 
                        type="text" 
                        className="User-account__input" 
                        value={fullName}
                        name="fullName"
                        onChange={e => setFullName(e.target.value)}  
                    />

                    <InputField 
                        label="Email" 
                        type="email" 
                        className="User-account__input" 
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}  
                    />

                    <InputField 
                        label="Position Type" 
                        type="text" 
                        className="User-account__input" 
                        value={positionType}
                        name="positionType"
                        onChange={e => setPositionType(e.target.value)}  
                    />

                    <div className="User-account__password-container">
                        <InputField 
                            label="Password" 
                            type={showPassword ? 'text' : 'password'}
                            className="User-account__input" 
                            value={password}
                            name="password"
                            onChange={e => setPassword(e.target.value)}  
                        />

                        <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
                    </div>

                    <div className="User-account__buttons">
                        <Button
                            className="User-account__submit"
                            label="Save changes" 
                            type="submit"
                            startIcon={<SaveIcon />}
                            onClick={e => handleSubmit(e)}
                        />

                        <Button
                            className="UserAccount__cancel"
                            label="Cancel edit" 
                            type="button"
                            color="secondary"
                            startIcon={<CancelIcon />}
                            onClick={handleCancelEdit}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UserAccount;
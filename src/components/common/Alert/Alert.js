import React from 'react';
import { Alert as AlertM } from '@material-ui/lab';
import './Alert.scss';

const Alert = ({
    text,
    className,
    ...rest
}) => (
    <AlertM
        {...rest}
        className={`Alert ${className}`}
    >
        {text}
    </AlertM>
);

export default Alert;

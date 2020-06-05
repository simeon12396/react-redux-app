import React from 'react';
import {Alert as AlertM } from '@material-ui/lab';
import './Alert.scss';

const Alert = ({
    text,
    severity,
    color,
    variant,
    className,
    ...rest
}) => (
    <AlertM
        severity={severity}
        color={color}
        variant={variant}
        {...rest}
        className={`Alert ${className}`}
    >
        {text}
    </AlertM>
);

export default Alert;

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
}) => {
    return (
        <div>
            <AlertM
                severity={severity}
                color={color}
                variant={variant}
                {...rest}
                className={`Alert ${className}`}
            >
                {text}
            </AlertM>
        </div>
    );
};

export default Alert;

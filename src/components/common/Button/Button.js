import React from 'react'
import {Button as ButtonM} from '@material-ui/core/';

const Button = ({
    label,
    variant="contained", 
    color="primary",
    startIcon, 
    endIcon, 
    className,
    ...rest
}) => {
    return (
        <ButtonM
            className={className} 
            variant={variant} 
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            {...rest}
        >
            {label}
        </ButtonM>
    );
};

export default Button;

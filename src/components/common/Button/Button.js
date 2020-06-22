import React from 'react'
import { Button as ButtonM } from '@material-ui/core/';

const Button = ({
    label,
    variant="contained", 
    color="primary",
    ...rest
}) => (
    <ButtonM
        variant={variant} 
        color={color}
        {...rest}
    >
        {label}
    </ButtonM>
);

export default Button;

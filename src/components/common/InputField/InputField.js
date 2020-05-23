import React from 'react'
import TextField from '@material-ui/core/TextField';

const InputField = ({
    className, 
    variant, 
    label, 
    type, 
    fullWidth=true,
    ...rest
}) => {
    return (
        <TextField
            className={className}
            label={label}
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            {...rest}
        />
    );
};

export default InputField;

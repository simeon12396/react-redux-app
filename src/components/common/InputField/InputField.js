import React from 'react'
import TextField from '@material-ui/core/TextField';

const InputField = ({
    className, 
    inputRef, 
    fullWidth=true,
    ...rest
}) => (
    <TextField
        inputRef={inputRef}
        className={className}
        fullWidth={fullWidth}
        {...rest}
    />
);

export default InputField;

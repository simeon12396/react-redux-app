import React from 'react'
import TextField from '@material-ui/core/TextField';

const InputField = ({
    fullWidth=true,
    ...rest
}) => (
    <TextField
        fullWidth={fullWidth}
        {...rest}
    />
);

export default InputField;

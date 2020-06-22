import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProgressIndicator.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ProgressIndicator = ({
  circleIndicator=false, 
  linearIndicator=false, 
  ...rest
  }) => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
          { circleIndicator && <CircularProgress {...rest} /> }

          { linearIndicator && <LinearProgress {...rest} /> }      
        </div>
    )
};

export default ProgressIndicator;

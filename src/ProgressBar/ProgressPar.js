import { LinearProgress, withStyles } from '@material-ui/core';
import React from 'react';

const styles = {
    root:{
        height:10,
    },
};

function ProgressBar(props){
    const {classes} = props;
    return <LinearProgress color="secondary" className={classes.root} variant="determinate" value={props.value}/>;
}


export default withStyles(styles)(ProgressBar);

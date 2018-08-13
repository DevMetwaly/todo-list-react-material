import React from 'react';
import {AppBar, Typography, Toolbar, withStyles } from '@material-ui/core';


const styles = {
  title: {   
    textAlign:'left',
    marginLeft:'20px',
    flexGrow:3
  },
  appbar:{
      width:'100%'
  }
};

function Header(props) {
    const { classes } = props;
    return (
        
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.title}>
                    Todo List 
                </Typography>
            </Toolbar>
        </AppBar>
    );
}


export default withStyles(styles)(Header);

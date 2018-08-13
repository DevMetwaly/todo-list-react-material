import React from 'react';
import { Tab, Tabs, AppBar, withStyles } from '@material-ui/core'


const styles = {
  root: {
    maxWidth: 500,
    margin: 'auto'
  },
};

function FullWidthTabs(props) {
  const { classes } = props;
  return (

    <AppBar position="static" color="default" className={classes.root}>
      <Tabs
        value={props.index}
        onChange={props.handleChange}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
    </AppBar>
  );
}




export default withStyles(styles)(FullWidthTabs);

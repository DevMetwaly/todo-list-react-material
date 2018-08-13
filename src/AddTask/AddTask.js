import React,{ Component } from 'react';
import { IconButton, Collapse, CardHeader, CardContent, Typography, Card, withStyles, TextField, CardActions, Button, Icon } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';

const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: 'auto'
  },
  actions: {
    display: 'flex',
  },
  rightIcon: {
    marginLeft: 5,
  },
  button: {
    margin: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class AddTask extends Component {
  state = {
    task: '',
    expanded: false
  }
  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Typography variant="headline">
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
             Add New Task
          </Typography>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit> 
            <CardContent>
              <Typography component="p">
                <TextField
                  id="full-width"
                  label="Task Name"
                  helperText="Name Of The New Task"
                  fullWidth
                  margin="normal"
                  value={this.state.task} 
                  onChange={this.handleChange}
                  name='task'/>
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              
              <Button 
              variant="contained" 
              color="primary" 
              className={classes.button}
                onClick={this.props.handleSubmit(this.state.task)}>
                Add Task
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </CardActions>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AddTask);
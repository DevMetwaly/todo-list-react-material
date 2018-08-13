import React,{ Component } from 'react';
import { CardHeader, CardContent, Typography, Card, withStyles, TextField, CardActions, Button, Icon } from '@material-ui/core';

const styles ={
  card: {
    width: 400,
    margin:'auto'
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
};

class AddTask extends Component {
  state = {
    task: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader title="Add New Task"/>
          
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
              Primary
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AddTask);
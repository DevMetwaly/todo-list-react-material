import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Checkbox, ListItemText, ListItemSecondaryAction, ListItem, withStyles } from '@material-ui/core';

const styles = theme => ({
    
});

function ToDoElement(props){
    
    return(
        <ListItem
            onClick={props.handleComplete(props.id)}
            key={props.id}
            role={undefined}
            dense
            button>

            <Checkbox
                tabIndex={-1}
                checked={props.completed}
                disableRipple/>
            <ListItemText primary={props.name} />
            <ListItemSecondaryAction>
            <IconButton 
            aria-label="Delete"
            onClick={props.handleDelete(props.id)}><DeleteIcon /></IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default withStyles(styles)(ToDoElement);
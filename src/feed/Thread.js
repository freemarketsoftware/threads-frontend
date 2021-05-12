import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Faker from "faker";
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));


function Thread({thread}) {
  const classes = useStyles();
  return (
      <List className={classes.root}>
        <React.Fragment key={thread.id}>
          <ListItem key={thread.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="avatar" src={Faker.image.avatar()} />
            </ListItemAvatar>
            <ListItemText primary={<Typography className={classes.fonts}>{thread.name}</Typography>} secondary={<>{thread.body}</>}/>
          </ListItem>
          <Divider />
        </React.Fragment>
      </List>
  )
}




export default Thread

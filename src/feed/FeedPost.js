import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Faker from "faker";
import { List, ListItem, GridListTile, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";

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


function FeedPost({post}) {
  const classes = useStyles();
  return (
        <React.Fragment key={post.id}>
          <ListItem key={post.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="avatar" src={Faker.image.avatar()} />
            </ListItemAvatar>
            <ListItemText primary={<Typography className={classes.fonts}>{post.title}</Typography>} secondary={<>{post.body}</>}/>
          </ListItem>
          <Divider />
        </React.Fragment>

  )
}




export default FeedPost

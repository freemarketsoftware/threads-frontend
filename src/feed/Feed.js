import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, Paper } from '@material-ui/core';
import FeedPost from './FeedPost'
import FeedHeader from './FeedHeader'

const posts = [
    {id:1,  author: "Regedit",    title:"How to solve all your problems", body: "Might do it",         timestamp:"21:02"},
    {id:2,  author: "Goldrum",    title:"How to solve all your problems", body: "Keep going",          timestamp:"21:02"},
    {id:3,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:4,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:5,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:6,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:7,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:8,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:9,  author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:10, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:11, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:12, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:13, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:14, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:15, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
    {id:16, author: "CrazyRabbi", title:"How to solve all your problems", body: "Time to light it up", timestamp:"21:02"},
  ]

  const useStyles = makeStyles(theme => ({
    list: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
  }));

function Feed() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FeedHeader></FeedHeader>
      <List className={classes.list}>
      {posts.map((post, index) => <FeedPost post={post} />)}
      </List>
    </React.Fragment>
  )
}

export default Feed

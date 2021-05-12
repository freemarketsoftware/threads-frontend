import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Thread from './Thread'

const threads = [
    {id:1, name: "Regedit", body: "Might do it", timestamp:"21:02"},
    {id:2, name: "Goldrum", body: "Keep going", timestamp:"21:02"},
    {id:3, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:4, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:5, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:6, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:7, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:8, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:9, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:10, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:11, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:12, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:13, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:14, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:15, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
    {id:16, name: "CrazyRabbi", body: "Time to light it up", timestamp:"21:02"},
  ]


function Feed() {

  return (
    <>
      {threads.map((thread, index) => <Thread thread={thread} />)}
    </>
  )
}

export default Feed

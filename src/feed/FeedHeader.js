import { List, ListItem, Divider, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
}));

function FeedHeader() {
  const classes = useStyles();

  return (
      <>
        <Typography variant="h5">Feed</Typography>
      </>
  )


}

export default FeedHeader

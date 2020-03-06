import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import daysjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// CARD
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25
  }
};

class Comment extends Component {
  render() {
    daysjs.extend(relativeTime);
    const {
      classes,
      comments: {
        body,
        createdAt,
        userImage,
        userHandle,
        commentId,
        likeCount,
        commentCount
      }
    } = this.props;
    const date = new Date(createdAt._seconds * 1000);
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="profile image"
          className={classes.image}
        />
        <CardContent className={classes.details}>
          <Typography
            variant="h5"
            component={Link}
            to={`users/${userHandle}`}
            color="primary"
          >
            {" "}
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {daysjs(date.toUTCString()).fromNow()}
          </Typography>
          <Typography variant="body1"> {body} </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Comment);

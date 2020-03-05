import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// CARD
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

class Comment extends Component {
  render() {
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
      <Card>
        <CardMedia image={userImage} title="profile image" />
        <CardContent>
          <Typography variant="h5"> {userHandle}</Typography>
          <Typography variant="body2" color="textSecondary">
           {date.toUTCString()}
          </Typography>
          <Typography variant="body1"> {body} </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Comment);

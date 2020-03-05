import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Comment from "../components/Comment"

class home extends Component {
  state = {
    comments: null
  };

  componentDidMount() {
    axios.get("/comments").then(res => {
      this.setState({
        comments: res.data
      });
    });
  }
 
  render() {
    let recentCommentMarkup = this.state.comments ? (
      this.state.comments.map((comment) => <Comment key={comment.replyId} comments={comment}/>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentCommentMarkup}
        </Grid>
        <Grid item sm={8} xs={12}>
          <p>PROFILE...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;

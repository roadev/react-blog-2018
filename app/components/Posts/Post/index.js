import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { CardStyled } from './styles';

class Post extends Component {

  state = {
    showConfirm: false,
  };

  render() {
    const { id, title, body, deletePost } = this.props;

    return (
      <Fragment>
        <Dialog
          onClose={() => this.setState({ showConfirm: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.showConfirm}
        >
          <DialogTitle id="simple-dialog-title">
            Delete a Post
          </DialogTitle>
          <DialogContent>
            <p>
              Are you sure you want to delete the post {id}?
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ showConfirm: false })} color="primary">
              No
            </Button>
            <Button onClick={() => deletePost(id)} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <CardStyled>
          <CardContent>
            <h1>{title}</h1>
            <p>{body}</p>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => this.setState({ showConfirm: true })}
              variant="fab"
              color="secondary"
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </CardStyled>
      </Fragment>

    );
  }
}


Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  body: 'This post has no content',
};

export default Post;

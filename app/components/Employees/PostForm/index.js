import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton } from './styles';

class PostForm extends Component {

  static postState = () => fromJS({
    title: '',
    body: '',
  })

  static propTypes = {
    createPost: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
  }

  state = {
    postState: PostForm.postState(),
  };

  onChange = (value, key) => {
    const postState =
      key === 'title' && value === '' ?
        this.state.postState.withMutations(map => {
          map.set(key, value).set('body', '');
        }) :
          this.state.postState.set(key, value);
    this.setState({ postState });
  }

  createPost = () => {
    const { createPost } = this.props;
    createPost(this.state.postState.set('date', new Date()));
  }


  validateForm = () => this.state.postState.get('title') !== '';

  handleClose = () => this.props.handleClose(false);

  render() {
    console.log(this.state.postState.get('title'));
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.props.showForm}
        >
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <div>
            <TitleContainer>
              <StyledTextField
                label="Title"
                value={this.state.postState.get('title')}
                onChange={e => this.onChange(e.target.value, 'title')}
                margin="normal"
              />
            </TitleContainer>
            {this.validateForm() ? (
              <BodyContainer>
                <StyledTextField
                  label="Body"
                  value={this.state.postState.get('body')}
                  onChange={e => this.onChange(e.target.value, 'body')}
                  margin="normal"
                  // disabled={!this.validateForm()}
                />
              </BodyContainer>
            ) : null}
          </div>
          <div>
            <SaveButton
              onClick={this.createPost}
              disabled={this.state.postState.get('body') === ''}

            >
                Save
            </SaveButton>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default PostForm;

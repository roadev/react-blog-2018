import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton } from './styles';

class PostForm extends Component {

  static postState = () => fromJS({
    title: '',
    body: '',
  })

  static getDerivedStateFromProps(props, state) {
    console.log('state', state.postState);
    console.log('props', props.postToEdit);
    const { postToEdit } = props;
    if (postToEdit && state.postState.filter(p => p !== '').size === 0) {
      return Object.assign({}, { postState: postToEdit });
    }
    return { postState: PostForm.postState() };
  }

  static propTypes = {
    createPost: PropTypes.func.isRequired,
    postToEdit: ImmutablePropTypes.map,
    handleClose: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    postToEdit: undefined,
  };

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

  editPost = () => {

  }


  validateForm = () => this.state.postState.get('title') !== '';

  handleClose = () => this.setState({ postState: PostForm.postState() }, () => this.props.handleClose(false));

  render() {
    // console.log('postToEdit', this.props.postToEdit);
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.props.showForm}
        >
          <DialogTitle id="simple-dialog-title">{`${this.props.postToEdit ? 'Edit' : 'Create'} post`}</DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <SaveButton
              onClick={this.props.postToEdit ? this.editPost : this.createPost}
              disabled={this.state.postState.get('body') === ''}

            >
                Save
            </SaveButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PostForm;

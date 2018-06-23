import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton } from './styles';

class PostForm extends Component {

  static postState = () => fromJS({
    title: '',
    body: '',
  })

  static propTypes = {
    createPost: PropTypes.func.isRequired,
  }

  state = {
    postState: PostForm.postState(),
  };

  onChange = (value, key) => {
    const postState = this.state.postState.set(key, value);
    this.setState({ postState });
  }

  createPost = () => {
    const { createPost } = this.props;
    createPost(this.state.postState.set('date', new Date()));
  }

  validateForm = () => this.state.postState.get('title') !== '';

  render() {
    console.log(this.state.postState.get('title'));
    return (
      <div>
        <TitleContainer>
          <StyledTextField
            label="Title"
            value={this.state.postState.get('title')}
            onChange={e => this.onChange(e.target.value, 'title')}
            margin="normal"
          />
        </TitleContainer>
        <BodyContainer>
          <StyledTextField
            label="Body"
            value={this.state.postState.get('body')}
            onChange={e => this.onChange(e.target.value, 'body')}
            margin="normal"
            disabled={!this.validateForm()}
          />
        </BodyContainer>
        <div>
          <SaveButton onClick={this.createPost}>
            Save
          </SaveButton>
        </div>
      </div>
    );
  }
}

export default PostForm;

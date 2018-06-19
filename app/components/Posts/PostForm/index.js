import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton } from './styles';

class PostForm extends Component {

  static propTypes = {
    createPost: PropTypes.func.isRequired,
  }

  state = {
    title: '',
    body: '',
  };

  onChange = (value, key) => this.setState({ [key]: value });

  createPost = () => {
    const { createPost } = this.props;
    createPost({ ...this.state, date: new Date() });
  }

  validateForm = () => this.state.title !== '';

  render() {
    console.log(this.state.title);
    return (
      <div>
        <TitleContainer>
          <StyledTextField
            label="Title"
            value={this.state.title}
            onChange={e => this.onChange(e.target.value, 'title')}
            margin="normal"
          />
        </TitleContainer>
        <BodyContainer>
          <StyledTextField
            label="Body"
            value={this.state.body}
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

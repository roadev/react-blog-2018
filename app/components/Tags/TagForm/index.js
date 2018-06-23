import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NameContainer, DescriptionContainer, StyledTextField, SaveButton } from './styles';

class TagForm extends Component {

  static propTypes = {
    createTag: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
  };

  onChange = (value, key) => this.setState({ [key]: value });

  createTag = () => {
    const { createTag } = this.props;
    createTag({ ...this.state, date: new Date() });
  }

  validateForm = () => this.state.name !== '';

  render() {
    console.log(this.state);
    return (
      <div>
        <NameContainer>
          <StyledTextField
            label="Name"
            value={this.state.name}
            onChange={e => this.onChange(e.target.value, 'name')}
            margin="normal"
          />
        </NameContainer>
        <DescriptionContainer>
          <StyledTextField
            label="Description"
            value={this.state.description}
            onChange={e => this.onChange(e.target.value, 'description')}
            margin="normal"
            disabled={!this.validateForm()}
          />
        </DescriptionContainer>
        <div>
          <SaveButton onClick={this.createTag}>
            Save
          </SaveButton>
        </div>
      </div>
    );
  }
}

export default TagForm;

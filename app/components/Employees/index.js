import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import Employee from './Employee';
import PostForm from './PostForm';
import Api from '../../services/Api';

class Employees extends Component {
  state = {
    employees: [],
    showForm: false,
  };

  async componentDidMount() {
    const employees = await Api.getPosts();
    console.log(employees);
    this.setState({ employees });
  }

  createPost = employee => {
    this.setState({ showForm: false }, async () => Api.createPost(employee));
  };

  deletePost = async id => Api.deletePost(id);

  handleOpenForm = () => this.setState({ showForm: true });

  handleCloseForm = () => this.setState({ showForm: false });

  renderPosts = () =>
    this.state.employees.map(employee => (
      <Employee
        key={employee._id}
        id={employee._id}
        title={employee.title}
        body={employee.body}
        deletePost={this.deletePost}
      />
    ));

  render() {
    return (
      <div>
        <Header />
        <PostForm
          createPost={this.createPost}
          handleClose={this.handleCloseForm}
          showForm={this.state.showForm}
        />
        {this.renderPosts()}
        <Button onClick={this.handleOpenForm} variant="fab" color="primary">
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default Employees;

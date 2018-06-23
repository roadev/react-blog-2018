import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tag from './Tag';
import TagForm from './TagForm';

class Tags extends Component {

  state = {
    tags: [],
  };

  createTag = tag => {
    const tagWithId = Object.assign({}, tag, { id: this.state.tags.length + 1 });
    const tags = this.state.tags.concat(tagWithId);

    this.setState({ tags });
  }

  render() {
    console.log(this.state.tags);
    // const tags = this.state.tags.map(tag => (
    //   <Tag key={tag.id} name={tag.name} description={tag.description} />
    // ));

    return (
      <div>
        <TagForm createTag={this.createTag} />
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell numeric>Name</TableCell>
              <TableCell numeric>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tags.map(tag => (
              <TableRow key={tag.id}>
                <TableCell component="th" scope="row">
                  {tag.id}
                </TableCell>
                <TableCell>{tag.name}</TableCell>
                <TableCell>{tag.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Tags;

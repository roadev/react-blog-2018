import { create } from 'apisauce';

const api = create({
  baseURL: 'https://devhack-blog-api.herokuapp.com',
  headers: { 'Content-Type': 'application/json' },
});

class Api {

  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };

    this.url = 'https://devhack-blog-api.herokuapp.com';
  }

  async getPosts() {
    try {
      const response = await api.get('/posts');
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async getTags() {
    try {
      const response = await fetch(`${this.url}/tags`);
      const responseJson = await response.json();
      return responseJson;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async createPost(post) {
    try {
      const response = await api.post('/posts', post);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async editPost(id, post) {
    try {
      const response = await api.patch(`/posts/${id}`, post);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async deletePost(id) {
    const response = await fetch(`${this.url}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }
}

export default new Api();

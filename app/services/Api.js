class Api {

  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };

    this.url = 'https://devhack-blog-api.herokuapp.com';
  }

  async getPosts() {
    console.log('hi');
    try {
      const response = await fetch(`${this.url}/posts`);
      const responseJson = await response.json();
      return responseJson;
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

  createPost = async post => {
    try {
      const response = await fetch(`${this.url}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post.toJS()),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
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

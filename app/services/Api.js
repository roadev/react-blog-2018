class Api {

  static getPosts = async () => {
    try {
      const response = await fetch('https://devhack-blog-api.herokuapp.com/posts');
      const responseJson = await response.json();
      return responseJson;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  static createPost = async post => {
    try {
      const response = await fetch('https://devhack-blog-api.herokuapp.com/posts', {
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

  static deletePost = async id => {
    const response = await fetch(`https://devhack-blog-api.herokuapp.com/posts/${id}`, {
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

export default Api;

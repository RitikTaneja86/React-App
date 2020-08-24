import React from 'react';
import axios from 'axios';
import Post from './Post';
import { render } from '@testing-library/react';


class PostsList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.getPosts();
  }

  getPosts() {
    axios.get('http://100.26.160.143/api/v1/posts').then((data) => {this.setState({posts: data.data.posts})})
  }

  render() {
      return (
        <div>
            <h1>Codeial Posts</h1>
            <ul>
                {
                  this.state.posts.map((post) => <Post post={post} key={post._id}></Post>)
                }
            </ul>
        </div>
      );
  }
}

export default PostsList;

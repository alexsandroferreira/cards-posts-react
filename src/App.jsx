import React, { Component, useState } from 'react'

import './App.css'
import { PostCard } from './componets/PostCard';
import {loadPosts} from './utils/load-post'

class App extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
   await this.loadPosts();
  }

  loadPosts = async () => {
    const postosAndPhotos = await loadPosts();
    this.setState({posts: postosAndPhotos})
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map(post => (
            <PostCard 
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}
            />
          ))}
        </div>
      </section>

    )
  }
}

export default App;


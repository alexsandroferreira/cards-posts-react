import React, { Component, useState } from 'react'

import './App.css'
import { PostCard } from './componets/PostCard';
import { loadPosts } from './utils/load-post'
import { Posts } from './componets/Posts';

class App extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postosAndPhotos = await loadPosts();
    this.setState({ posts: postosAndPhotos })
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts}/>
      </section>

    )
  }
}

export default App;


import React, { Component, useState } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load-post'
import { Posts } from '../../componets/Posts';

class Home extends React.Component {
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

export default Home;


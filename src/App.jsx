import React, { Component, useState } from 'react'

import './App.css'


class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postResponse, photosResponse]);

    const postsJason = await posts.json();
    const photosJason = await photos.json();

    const potosAndPhotos = postsJason.map((post, index) =>{
      return{...post, cover: photosJason[index].url}
    })
    this.setState({ posts: potosAndPhotos })
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    )
  }
}

export default App;


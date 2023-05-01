import React, { Component, useState } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load-post'
import { Posts } from '../../componets/Posts';
import { PostButton } from '../../componets/PostButton';

class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postosAndPhotos = await loadPosts();
    this.setState({
      posts: postosAndPhotos.slice(page, postsPerPage),
      allPosts: postosAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts,page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className='container'>
        <Posts posts={posts} />

        <div className="button-container">
          <PostButton
          disabled={noMorePosts}
            text='Load More Posts'
            onClick={this.loadMorePosts} />
        </div>
      </section>

    )
  }
}

export default Home;


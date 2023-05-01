import React, { Component, useState } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load-post'
import { Posts } from '../../componets/Posts';
import { PostButton } from '../../componets/PostButton';
import { PostInputText } from '../../componets/PostInputText';

class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postosAndPhotos = await loadPosts();
    this.setState({
      posts: postosAndPhotos.slice(page, postsPerPage),
      allPosts: postosAndPhotos,
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;


    console.log("value" + filteredPosts)

    return (
      <section className='container'>
        <div className="search-content">
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>

          )}
          <PostInputText
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existe Post com esse Titúlo</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <PostButton
              disabled={noMorePosts}
              text='Load More Posts'
              onClick={this.loadMorePosts}
            />
          )}

        </div>
      </section>

    )
  }
}

export default Home;


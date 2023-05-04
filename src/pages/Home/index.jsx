import React, { Component, useCallback, useEffect, useState } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load-post'
import { Posts } from '../../componets/Posts';
import { PostButton } from '../../componets/PostButton';
import { PostInputText } from '../../componets/PostInputText';

 function Home() {

  const [posts, setPosts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {

    const postosAndPhotos = await loadPosts();


    setPosts(postosAndPhotos.slice(page, postsPerPage))
    setallPosts(postosAndPhotos)
  },[])


  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)


    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)

  }

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;


  return (
    <section className='container'>
      <div className="search-content">
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>

        )}
        <PostInputText
          searchValue={searchValue}
          handleChange={handleChange}
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
            onClick={loadMorePosts}
          />
        )}

      </div>
    </section>

  )
}



export default Home;


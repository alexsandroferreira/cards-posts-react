import React, { Component, useState } from 'react'

import './App.css'


class App extends React.Component {
  // state com Class components
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Alexsandro',
          body: 'Homem de 31 anos, Buscando se desenvolver em programação'
        },
        {
          id: 2,
          title: 'João',
          body: 'Homem de 31 anos, Buscando se desenvolver em programação'
        },
        {
          id: 3,
          title: 'Carlos',
          body: 'Homem de 31 anos, Buscando se desenvolver em programação'
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;
    return (
    <div className='App'>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    )
  }
}

export default App;
// export default function App() {



//   state = {
//     posts: []
//   }



//   loadPosts = async () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(reponse => Response.json())
//       .then(posts => this.setState({ posts }))
//   }

//   return (


//     <>
//       <div>
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>

//     </>

//   )
// }



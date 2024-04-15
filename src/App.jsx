import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import cuties from './assets/cutiess.png';
import CreatePost from './pages/createPost';
import Post from './pages/post';
import Update from './pages/update'; 
import About from './pages/about'; 

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Welcome to the Tomogachi family!</h1>
        <p>Here, you can create your very own set of cute Tomogachi characters!</p>
        <img src={cuties} alt="Example Image" className="tomo" />
        <div>
          <Link to="/create">
            <button>Create Post</button>
          </Link>
          <Link to="/posts">
            <button>View Posts</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/about/:id" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

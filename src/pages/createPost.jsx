import React, { useState } from 'react';
import { supabase } from '../client';
import './createPost.css';

const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    character: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const createPost = async () => {
    if (!post.name || !post.character) {
      alert("Please enter a name and select a character.");
      return;
    }

    await supabase
      .from('mate')
      .insert({
        name: post.name,
        character: post.character,
      });

    window.location = "/new";
  };

  return (
    <div className="form-container">
      <label htmlFor="title">Create your Character!</label> <br />
      <select id="character" name="character" value={post.character} onChange={handleChange}>
        <option value="">Select Character</option>
        <option value="Mametchi">Mametchi</option>
        <option value="Ametchi">Ametchi</option>
        <option value="Tarakotchi">Tarakotchi</option>
        <option value="Togetchi">Togetchi</option>
      </select>
      <input type="text" id="title" name="name" onChange={handleChange} placeholder="Enter Name" />
      <button onClick={createPost}>Create Tomogachi</button>
    </div>
  );
};

export default CreatePost;


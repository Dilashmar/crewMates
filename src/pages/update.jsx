
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'; 
const Update = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    name: '',
    character: '',
  });

  useEffect(() => {

    const fetchPost = async () => {
      console.log('ID from URL:', id); 
      const { data, error } = await supabase.from('mate').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching post:', error.message);
      } else {
        setPost(data);
      }
    };
    fetchPost();
  }, [id]); 

  const updatePost = async () => {
    console.log('Updating post with ID:', id); 
    const { error } = await supabase
      .from('mate')
      .update({
        name: post.name,
        character: post.character,
      })
      .eq('id', id);
    
    if (error) {
      console.error('Error updating post:', error.message);
    } else {
      console.log('Post updated successfully');
      // Handle success or navigation to another page
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
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
      <input type="text" id="title" name="name" onChange={handleChange} value={post.name} placeholder="Enter Name" />
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
};

export default Update;

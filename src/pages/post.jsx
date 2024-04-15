import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../Components/card';

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(); // Fetch posts when the component mounts
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase.from('mate').select();
            if (error) {
                throw error;
            }
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        }
    };

    return (
        <div className="ReadPosts">
            {posts.map((post) => (
                <Card key={post.id} name={post.name} character={post.character} />
            ))}
        </div>
    );
};

export default Post;

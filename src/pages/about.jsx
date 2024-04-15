import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const About = () => {
  const { id } = useParams(); 
  const [tomogatchi, setTomogatchi] = useState(null);

  useEffect(() => {
    fetchTomogatchi(); 
  }, []);

  const fetchTomogatchi = async () => {
    try {
      const { data, error } = await supabase.from('mate').select().eq('id', id);
      if (error) {
        throw error;
      }
      if (data.length > 0) {
        setTomogatchi(data[0]);
      } else {
        console.error('No Tomogatchi found with ID:', id);
      }
    } catch (error) {
      console.error('Error fetching Tomogatchi details:', error.message);
    }
  };

  if (!tomogatchi) {
    return <div>Loading...</div>;
  }

  return (
    <div className="About">
      <h2>{tomogatchi.name}</h2>
      <p>Character: {tomogatchi.character}</p>
    </div>
  );
};

export default About;

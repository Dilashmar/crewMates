import React from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';

const Card = (props) => {
  const characterImages = {
    Ametchi: 'https://static.tvtropes.org/pmwiki/pub/images/mametchi_anime_large_9.png',
    Mametchi: 'https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/03/F4WxefuBqQy3sq2g/%E3%81%86%E3%83%BC%E3%81%B1%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png?_=5929f9b5ab785b1d3dfeea921ebc9873',
    Tarakotchi: 'https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/03/CgoIIIEPHSIiOR8d/%E3%81%B4%E3%81%93%E3%81%A1%E3%82%85%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png?_=5929f9b5ab785b1d3dfeea921ebc9873',
    Togetchi: 'https://i.pinimg.com/originals/3b/d7/f7/3bd7f77ed7166eee12daae0cb788bb6e.png',
  };

  return (
    <div className="Card">
      <h2 className="title">{props.name}</h2>
      <p>Character: {props.character}</p>
      {characterImages[props.character] && (
        <img src={characterImages[props.character]} alt={props.character} className="character-image" />
      )}
      <Link to={`/about/${props.id}`} className="about-link">About {props.name}</Link>
      <Link to={`/edit/${props.id}`} className="edit-button">Edit</Link>
    </div>
  );
};

export default Card;


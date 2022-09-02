import React from 'react';
import Card from "../Card/Card";
import { useSelector } from 'react-redux';
import './Favorites.css';

function Favorites() {

  const favorites = useSelector(state => state.favorites);

  return (
    <div className='Favorites'>
      <h1>Favorites</h1>
      { favorites.length > 0
        ?
        <ul className='favoritesList'>
          {favorites.map(element => <Card key={element.id} card={element}/>)}
        </ul>
        :
        <div className='no-favorites-container'>
          <div className='no-favorites-list'>
            <h2>There is not favorites selected</h2>
          </div>
        </div>

      }

    </div>
  );
}

export default Favorites;
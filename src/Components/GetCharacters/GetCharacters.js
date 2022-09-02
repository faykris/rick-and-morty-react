import React, { useEffect, useState } from 'react';
import { useQuery, gql, from } from '@apollo/client';

import { LOAD_CHARACTERS } from '../../GraphQL/Queries';
import './GetCharacters.css';
import Card from '../Card/Card';

function GetCharacters() {
  const { error, loading, data } = useQuery(LOAD_CHARACTERS);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (data) {
      const charactersFromApi = data.characters.results;
      setCharacters(charactersFromApi);
    }
  }, [data]);

  return (
    <div className='GetCharacters'>
      <h1>Characters</h1>
      <ul className='CharactersList'>
        {characters.map(element => <Card key={element.id} card={element}/>)}
      </ul>
    </div>
  );
}

export default GetCharacters;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router";

import {LOAD_DETAILS} from '../../GraphQL/Queries';
import {useQuery} from "@apollo/client";
import './Details.css';

function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const characterId = params.id;
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_DETAILS(characterId));
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (data) {
      const characterFromApi = data?.character;
      setCharacter(characterFromApi);
    }
  }, [data]);

  return (
    character.image &&
    <div className='Details'>
      <h1>Details</h1>
      <div className='details-container'>
        <div className='details-card'>
          <div className='image-name'>
            <div className='char-image' style={{backgroundImage: `url("${character.image}")`}}>

            </div>
            <div className='char-name'>
              <h1>{character.name}</h1>
            </div>
          </div>
          <div className='info'>
            <div className='info-field'>
              <span>Status </span>{character.status}
            </div>
            <div className='info-field'>
              <span>Species </span>{character.species}
            </div>
            <div className='info-field'>
              <span>Gender </span>{character.gender}
            </div>
            <div className='info-field'>
              <span>Origin </span>{character.origin.name}
            </div>
            <div className='info-field'>
              <span>Origin dimension </span>{character.origin.dimension}
            </div>
            <div className='info-field'>
              <span>Location </span>{character.location.name}
            </div>
            <div className='info-field'>
              <span>Location dimension </span>{character.location.dimension}
            </div>
            <div className='info-field'>
              <span>Number of episodes </span>{character.episode.length}
            </div>
            <div className='info-buttons'>
              <button className='go-back' onClick={() => navigate(-1)}>Go back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
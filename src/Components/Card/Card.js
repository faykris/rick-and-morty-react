import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import './Card.css';
import { addFavorite, delFavorite } from '../../redux/actions';

function Card({card}) {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const index = favorites.indexOf(card);
    setIsFavorite(index > -1);
  });

  const dispatchFunction = isFavorite ? () => dispatch(delFavorite(card)) : () => dispatch(addFavorite(card));

  return (
    <li className='Card' onClick={() => navigate(`/details/${card.id}`) }>
      <div className='card-img' style={{backgroundImage: `url("${card.image}")`}} >
        <div className='card-ico' onClick={(e) => {
            e.stopPropagation();
            dispatchFunction()
          }}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeart : farHeart} />
        </div>
      </div>
      <div className='card-body' >
        <h3>{card.name}</h3>
      </div>
    </li>
  );


}

export default Card;
import React from 'react';
import './Header.css'
import { useSelector } from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";

function Header() {
  const favorites = useSelector(state => state.favorites);
  const navigate = useNavigate();

  return (
    <header className='Header'>
      <div className='header-logo' onClick={() => navigate("/") }>

      </div>
      <nav className='header-nav'>
        <span onClick={() => navigate("/exercise2") } >List Nicknames</span>
        <span className='header-favorites' onClick={() => navigate("/favorites") }>
          <span>Favorites</span>
          <FontAwesomeIcon icon={faHeart}/>
          <span> {favorites.length}</span>
        </span>
      </nav>
    </header>
  );
}

export default Header;
import React from 'react';
import './ListNickName.css';

function ListNicknames({names, order}) {
  let nicks = [];
  if (names.length > 0) {
    nicks = names.map((nick) => nick.split(' ')[1])
    switch(order) {
      case 'ASC':
        nicks = nicks.sort();
        break;
      case 'DESC':
        nicks = nicks.sort().reverse();
        break;
    }
  }

  return (
    <div className='ListNickNames'>
      { names.length > 0
        ?
        <div className='ordered-list'>
          <ul>
            {nicks.map((nick) => <li key={nick} >{nick}</li>)}
          </ul>
        </div>
        :
        <div className='no-names-list'>
          <h2>There is not nicknames added</h2>
        </div>
      }
    </div>
  );
}

export default ListNicknames;

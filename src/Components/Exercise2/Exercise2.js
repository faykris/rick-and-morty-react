import React, {useState} from 'react';
import ListNicknames from "../ListNicknames/ListNicknames";
import './Exercise2.css';


function Exercise2() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');
  const [option, setOption] = useState('ASC');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  function checkNickname() {

    const index = names.indexOf(input);

    if (input === '') {
      setError("Name & Nickname can't be empty.");
    }
    else if (input.split(' ').length < 2) {
      setError('You need to specify a second word as nickname separated with space.');
    }
    else if (names.length > 0 && index > -1) {
      setError('The nickname already exists in the list. Try another.');
    } else {
      setNames([...names, input ]);
      setError('');
      setInput('');
    }
  }

  return (
    <div className='Exercise2'>
      <h1>List Nicknames</h1>
      <div className='listNickNames-form'>
        <div className='listNickNames-field'>
          <label htmlFor="Name">Name & Nickname</label>
          <input className='input-name-nickname' type="text" id="Name" name="Name" value={input} onChange={(e => setInput(e.target.value))}/>
        </div>
        <div className='listNickNames-field'>
          <label htmlFor="Order">Order</label>
          <select className='select-order-nickname' id="Order" name="Order" value={option} onChange={handleChange}>
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
          </select>
        </div>
      </div>
      <div className='listNickNames-buttons'>
        <button className='addNames' onClick={() => checkNickname()}>
          Add Nickname
        </button>
        <button className='clearList' onClick={() => setNames([])}>
          Clear List
        </button>
      </div>
      <div className='errorMessage'>
        <span>{error}</span>
      </div>
      <ListNicknames names={names} order={option} />
    </div>
  );
}

export default Exercise2;
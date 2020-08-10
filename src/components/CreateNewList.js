import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CreateNewList = (props) => {
  const [listName, setListName] = useState('');

  let handleChange = (e) => {
    setListName(e.target.value);
  }

  return (
    <div className="new-list-container">
      <form className="create-new-list" onSubmit={e => props.handleNewList(listName, e)}>
        <input 
          onChange={ handleChange } 
          value={ listName } 
          className="new-list-input" 
          type="text" 
          id="id-new-list-name" 
          required 
          placeholder="new list" />
        <button className="button-new-list" type="submit" >
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </form>
    </div>
  );
};

export default CreateNewList;
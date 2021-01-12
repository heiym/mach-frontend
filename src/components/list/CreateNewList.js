import React, { useState } from 'react';
import PlusIcon from '../icons/PlusIcon';

const CreateNewList = (props) => {
  const [listName, setListName] = useState('');

  let handleChange = (e) => {
    setListName(e.target.value);
  }

  return (
    <div className="new-list-container">
    <form className="create-new-list" onSubmit={e => { props.handleNewList(listName, e); setListName('')} }>
        <input
          onChange={handleChange}
          value={listName}
          className="new-list-input"
          type="text"
          id="id-new-list-name"
          required
          placeholder="create a new list" />
        <button className="button-new-list" type="submit" >
          <PlusIcon className="new-list-icon" fill='#0c0c0c' />
        </button>
      </form>
    </div>
  );
};

export default CreateNewList;
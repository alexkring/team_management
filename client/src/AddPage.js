import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import Roles from './Roles.js';
import UserComponent from './UserComponent.js';
import {User} from './User.js';

function AddPage({isActive, onChangePage}) {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/add-page/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCancelClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  const user = new User("Alex", "Kring", "awkring@gmail.com", "4152152135", Roles.Admin);

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Add a team member</h1>
      <p>Set email, location and role.</p>
      <p>{message}</p>
      <UserComponent user={user}>
      </UserComponent>
      <button>
        Save
      </button>
      <button onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
}

export default AddPage;

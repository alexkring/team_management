import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import Roles from './Roles.js';
import UserComponent from './UserComponent.js';
import {User} from './User.js';

function AddPage({isActive, onChangePage}) {

  const initialUser = new User("Alex", "Kring", "awkring@gmail.com", "4152152135", Roles.Admin);
  const [user, setUser] = useState(initialUser);

  const handleCancelClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  const handleSaveClick = () => {
    createUser(user);
  };

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Add a team member</h1>
      <p>Set email, location and role.</p>
      <UserComponent user={user}>
      </UserComponent>
      <button onClick={handleSaveClick}>
        Save
      </button>
      <button onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
}

function createUser(user) {
  axios
    .post('http://localhost:8000/api/user/', {
      user_object: user,
    })
    .then((response) => {
      //setPost(response.data);
      console.log("received response from /api/user/: " + response.data);
    });
}

export default AddPage;

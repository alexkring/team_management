import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import UserComponent from './UserComponent.js';
import HttpStatusCodes from './HttpStatusCodes.js';

function EditPage({isActive, onChangePage, user}) {

  const handleSaveClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  const handleDeleteClick = () => {
    deleteUser(user.id)
      .then((response) => { 
        console.log("handleDeleteClick_response: ", response);
        if (response == HttpStatusCodes.NoContent) {
          console.log('user deleted successfully!');
          onChangePage(PageIndex.ListPage);
        }
      });
  };

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Edit team member</h1>
      <p>Edit contact info, location and role.</p>
      <UserComponent user={user}>
      </UserComponent>
      <button onClick={handleDeleteClick}>
        Delete
      </button>
      <button onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}

function deleteUser(id) {
  const url = `http://localhost:8000/api/users/${id}`;
  return axios
    .delete(url)
    .then((response) => {
    console.log("received response from delete /api/user/: " + response.data);
    console.log("status: " + response.status);
    let statusCode = parseInt(response.status);
    return statusCode;
  });
}

export default EditPage;

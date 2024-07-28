import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';
import UserComponent from './UserComponent.js';

function EditPage({isActive, onChangePage, user}) {

  const handleSaveClick = () => {
    onChangePage(PageIndex.ListPage);
  };

  const handleDeleteClick = () => {
    // TODO: delete user, and change page
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

export default EditPage;

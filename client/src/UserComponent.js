import React, { useState, useEffect } from 'react';
import './UserComponent.css';
import Roles from './Roles.js';
import HttpStatusCodes from './HttpStatusCodes.js';
import axios from 'axios';

function UserComponent({user, enableDelete, enableUpdate, onSaveUser, onCancel}) {

  const handleCreateClick = () => {
    createUser(user)
      .then((response) => { 
        console.log("handleSaveClick_response: ", response);
        if (response == HttpStatusCodes.Created) {
          console.log('user successfully created!');
          onSaveUser(user);
        }
      });
  };

  const handleDeleteClick = () => {
    deleteUser(user.id)
      .then((response) => { 
        console.log("handleDeleteClick_response: ", response);
        if (response == HttpStatusCodes.NoContent) {
          console.log('user deleted successfully!');
          onCancel();
        }
      });
  };

  const handleCancelClick = () => {
    console.log('handleCancelClick!');
    onCancel();
  };

  const handleUpdateClick = () => {
    console.log('handleUpdateClick!');
    onSaveUser(user);
  };

  return (
    <div className="User">
      <h4>Info</h4>
      <form>
        <div>
          <label for="first_name">First name:</label>
          <input type="text" name="first_name" name="first_name" defaultValue={user.first_name} required minlength="2" maxlength="25" size="10" />
        </div>
        <div>
          <label for="last_name">Last name:</label>
          <input type="text" id="last_name" name="last_name" defaultValue={user.last_name} required minlength="2" maxlength="25" size="10" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" defaultValue={user.email} required minlength="2" maxlength="25" size="30" />
        </div>
        <div>
          <label for="phone_number">Phone number:</label>
          <input type="text" id="phone_number" name="phone_number" defaultValue={user.phone_number} required minlength="2" maxlength="25" size="12" />
        </div>
        <div>
          <label for="role">Role:</label>
          <select name="selectedRole">
            <option value={Roles.Admin}>Admin</option>
            <option value={Roles.TeamMember}>Team Member</option>
          </select>
        </div>
      </form>
      <div>
        <LeftButton onDeleteClick={handleDeleteClick} onCancelClick={handleCancelClick} enableDelete={enableDelete}>
        </LeftButton>
        <RightButton onCreateClick={handleCreateClick} onUpdateClick={handleUpdateClick} enableUpdate={enableUpdate}>
        </RightButton>
      </div>
    </div>
  );
}

function LeftButton({onDeleteClick, onCancelClick, enableDelete}) {
  if (enableDelete) {
    return (
      <button onClick={onDeleteClick}>
        Delete
      </button>
    );
  } else {
    return (
      <button onClick={onCancelClick}>
        Cancel
      </button>
    );
  }
}

function RightButton({onCreateClick, onUpdateClick, enableUpdate}) {
  var callback = onCreateClick;
  if (enableUpdate) {
    callback = onUpdateClick;
  }
  return (
    <button onClick={callback}>
      Save
    </button>
  );
}

function updateUser(id) {
  // TODO
  /*
  user = {
    "id": id,
    "first_name": form.refs.first_name.value,
    "last_name": form.refs.last_name.value,
    "email": form.refs.email.value,
    "phone_number": form.refs.phone_number.value,
    "role": form.refs.description.value
  };

  const url = `http://localhost:8000/api/users/${id}`;
  return axios
    .update(url)
    .then((response) => {
    console.log("received response from delete /api/user/: " + response.data);
    console.log("status: " + response.status);
    let statusCode = parseInt(response.status);
    return statusCode;
  });
  */
}

function createUser(user) {
  return axios
    .post('http://localhost:8000/api/user/', {
      user_object: user
    })
    .then((response) => {
      console.log("received response from /api/user/: " + response.data);
      console.log("message: " + response.data.message);
      console.log("status: " + response.data.status);
      let statusCode = parseInt(response.data.status);
      return statusCode;
    });
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

export default UserComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import addUserIcon from './assets/plus.png';
import userIcon from './assets/user.png';
import './ListPage.css';

function ListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/list-page/')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderedUsers = users.map((user) =>
    <div key={user.id} className="ListPage-user">
      <div className="ListPage-user-icon">
        <img src={userIcon} alt="Add User" className="ListPage-user-icon-image" />
      </div>
      <div className="ListPage-user-info">
        <div> First name: {user.first_name} </div>
        <div> Last name: {user.last_name} </div>
        <div> Email: {user.email} </div>
        <div> Phone Number: {user.phone_number} </div>
        <div> Role: {user.role} </div>
      </div>
      <div className="ListPage-user-footer"> </div>
    </div>
  );

  return (
    <div className="ListPage">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src={addUserIcon} alt="Add User" className="ListPage-add-user-icon" />
      </div>
      <h1>Team Members</h1>
      <p>You have {users.length} team members</p>
      <div></div>
      <p>{renderedUsers}</p>
    </div>
  );
}

export default ListPage;

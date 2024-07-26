import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div key={user.id} className="flex justify-between p-2 text-lg text-base">
      <div> First name: {user.first_name} </div>
      <div> Last name: {user.last_name} </div>
      <div> Email: {user.email} </div>
      <div> Phone Number: {user.phone_number} </div>
      <div> Role: {user.role} </div>
    </div>
  );

  return (
    <div>
      <h1>Team Members</h1>
      <p>You have {users.length} team members</p>
      <div></div>
      <p>{renderedUsers}</p>
    </div>
  );
}

export default ListPage;

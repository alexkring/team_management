import React, { useState, useEffect } from 'react';
import './UserComponent.css';
import Roles from './Roles.js';

function UserComponent({user}) {

  return (
    <div className="User">
      <h4>Info</h4>
      <div>
        <label for="first_name">First name:</label>
        <input type="text" id="first_name" name="first_name" defaultValue={user.first_name} required minlength="2" maxlength="25" size="10" />
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
    </div>
  );
}

export default UserComponent;

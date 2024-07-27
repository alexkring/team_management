import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditPage({isActive, onChangePage}) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/edit-page/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Edit Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default EditPage;

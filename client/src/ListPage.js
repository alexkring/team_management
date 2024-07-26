import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/list-page/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default ListPage;

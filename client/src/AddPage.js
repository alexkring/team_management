import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageIndex from './PageIndex.js';

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

  if (!isActive) {
    return (<div/>);
  }

  return (
    <div>
      <h1>Add Page</h1>
      <p>{message}</p>
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

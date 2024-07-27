import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ListPage from './ListPage.js';
import AddPage from './AddPage.js';
import EditPage from './EditPage.js';
import PageIndex from './PageIndex.js';

function App() {

  const [pageIndex, setPageIndex] = useState(PageIndex.ListPage);

  const handleChangePage = (pageIndex) => {
    console.log("Hello from my function!");
    setPageIndex(pageIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ListPage isActive={pageIndex === PageIndex.ListPage} onChangePage={handleChangePage}>
      </ListPage>
      <AddPage isActive={pageIndex === PageIndex.AddPage} onChangePage={handleChangePage}>
      </AddPage>
      <EditPage isActive={pageIndex === PageIndex.EditPage} onChangePage={handleChangePage}>
      </EditPage>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;

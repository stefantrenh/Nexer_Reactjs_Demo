import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';
import Team from './routes/Team';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

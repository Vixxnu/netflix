import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {orginals,action,horror} from './url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={horror} title='horror' isSmall />
    </div>
  );
}

export default App;

//netflix project
//using axios
import React from 'react'
import NavBar from './Components/Navbar/NavBar'//automatically comes here/imported when component clled in code
import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { originals,action,comedy,romance,documentaries } from './urls';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost title="Netflix Originals" url={originals}/>
      {/* working logic new way -dynamically*/}
      <Rowpost title="Action" isSmall url={action}/>
      <Rowpost title="Comedy" isSmall url={comedy}/>
      <Rowpost title="Popular" isSmall url={documentaries}/>
      <Rowpost title="Romance" isSmall url={romance}/>
    </div>
  );
}

export default App;

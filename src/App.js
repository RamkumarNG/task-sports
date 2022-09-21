import { Route, Routes, Link } from 'react-router-dom';
import View from './components/View';
import Info from "./components/Info";
import Create from "./components/Create";
import "./scss/main.scss"


function App() {

  return (
    <div className="App">
      <div className='Header'>
        <div className='Header-content'>
          <h2>Navbar</h2>
          <nav>
            <ul>
              <li className="links"><Link className='links Navbar1' to="/teams">Team</Link></li>
              <li className='links'><Link className='links Navbar2' to="/players">Player</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
          <Route exact path='/:currPage/createTeam' element={<Create />} />
          <Route exact path='/:currPage/createPlayer' element={<Create />} />
          <Route exact path="/:currPage/:id" element={<Info />} />
          <Route exact path='/:currPage' element = { <View /> } />
          <Route exact path='/:currPage' element = { <View /> }/>
      </Routes>
    </div>
  );
}

export default App;

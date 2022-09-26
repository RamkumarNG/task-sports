import { Link } from 'react-router-dom';
// import View from './components/app/View';
// import Info from "./components/app/Info";
// import Create from "./components/app/Create";
import MainRoute from "./routes";
import "./scss/main.scss"

function App() {

  return (
        <div className="App">
            <div className='Header'>
                <div className='Header-content'>
                    <h2>Navbar</h2>
                    <nav>
                        <ul>
                            <li className="links"><Link className='links' to="/teams">TEAM</Link></li>
                            <li className='links'><Link className='links' to="/players">PLAYER</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {<MainRoute />}
        </div>
  );
}

export default App;

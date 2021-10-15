import './App.css';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import Career from './components/career/career';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

function App() {
  return (
    <header></header>
    <div id='m'>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Моя карьера</Link></li>
            <li><Link to="/projects">Мои проекты</Link></li>
            <li><Link to="/skills">Моя квалификация</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/"><Career /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/skills"><Skills /></Route>
        </Switch>      
      </BrowserRouter>
    </div>
    <footer></footer>
  );
}

export default App;

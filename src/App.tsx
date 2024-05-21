import { NavLink, useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">首页</NavLink>
        </li>
        <li>
          <NavLink to="/todos">待办</NavLink>
        </li>
      </ul>
      <div>{element}</div>
    </div>
  );
}

export default App;

import Home from '../pages/Home';
import Todos from '../pages/Todos';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
];

export default routes;

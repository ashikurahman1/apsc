import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        element: <p>Hello</p>,
      },
    ],
  },
]);

import { createBrowserRouter, Link } from 'react-router-dom';

import { Home } from './ui/views/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <span>About</span>
        </div>
      </div>
    ),
  },
]);

import './Home.css';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import reactLogo from '@/assets/react.svg';
import { Counter } from '@/ui/features/counter';

export function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <div className="container text-center">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <div>
            <Counter />
          </div>
          <p>
            Edit <code>src/ui/Home.tsx</code> and save to test HMR
          </p>
        </div>
        <div>
          <Link to="about">About page</Link>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div className="grid">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
}

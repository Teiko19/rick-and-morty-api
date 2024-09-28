import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

function MainComponent() {
  const router = createBrowserRouter([{ path: "*", element: <App /> }]);
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<MainComponent />)
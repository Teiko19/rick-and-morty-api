import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={createBrowserRouter([{ path: "*", element: <App /> }])} />);
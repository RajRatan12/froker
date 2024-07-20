import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, BlogPost, BlogList } from "./components/index.jsx";
import useTabVisibility from './components/useTabVisibility.jsx';

const App = () => {
  useTabVisibility();

  return <RouterProvider router={router} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="post/:postId" element={<BlogPost />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

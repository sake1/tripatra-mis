import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Warehouse from "./Pages/Home/Warehouse";
import Item from "./Pages/Home/Item";
import ErrorPage from "./Pages/ErrorPage";

import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Warehouse />
      },
      {
        path: "item",
        element: <Item />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

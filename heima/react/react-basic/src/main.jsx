import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App.jsx';

import store from './store';
import { Provider } from 'react-redux';

import { RouterProvider } from 'react-router';
import router from './router';

import './index.css';
import './theme.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
    </Provider>
  </StrictMode>,
);

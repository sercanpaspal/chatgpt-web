import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store/index';
import { ToastContainer } from './lib/toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);

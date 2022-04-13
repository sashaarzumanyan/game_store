import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './css/index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4527a0',
    },
    background: {
      default: "#222222",
    },
    info: {
      main: '#212121',
    }
  },
});
console.log(theme);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

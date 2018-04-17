import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Components
import App from './App';

// Stores
import authStore from './stores/authStore';
import channelStore from './stores/ChannelStore';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App authStore={authStore} channelStore={channelStore}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

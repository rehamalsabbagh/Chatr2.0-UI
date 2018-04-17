import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';
// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CreateChannel from './components/CreateChannel';
import ChannelView from './components/ChannelView';


function App(props) {
  const channelStore = props.channelStore;
  const authStore = props.authStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore} channelStore={channelStore}/>
      <Switch>
          <Route path='/channels/:channelID'
                 render={
                   props => <ChannelView {...props} authStore={authStore} channelStore={channelStore}/>
                 }/>
      </Switch>
      <CreateChannel authStore={authStore} channelStore={channelStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <Footer />
    </div>
  );
}

export default withRouter(observer(App));

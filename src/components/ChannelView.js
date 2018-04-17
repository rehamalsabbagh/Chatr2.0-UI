import React from 'react';
import {observer} from 'mobx-react';
import MessageBox from './MessageBox';

function ChannelView(props) {
  return (
    <div>
      <p>Here's the Channel View</p>
      
      <MessageBox currentChannelId={this.props.match.params.channelID} channelStore={props.channelStore} authStore={props.authStore}/>
    </div>
  );
}

export default observer(ChannelView);


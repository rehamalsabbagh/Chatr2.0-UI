import React from 'react';
import {observer} from 'mobx-react';

function MessageBox(props) {
	return (
	<div>
	<textarea rows ="5" cols = "10" 
	onChange={(e) => {
              props.channelStore.message = e.target.value;
              props.channelStore.error = [];}}
	>
	Say hello to everybody in the channel!!
	</textarea>
	<button onClick={()=>props.channelStore.createNewMessage(props.authStore.username, props.authStore.token, props.currentChannelId)} bsStyle="primary" bsSize="large">
      Send Message
    </button>	
    </div>);
}

export default MessageBox;
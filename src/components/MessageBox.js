import React from 'react';
import {observer} from 'mobx-react';

function MessageBox(props) {
	return (
		<div className="input-group mb-3 msgBox" >
		  <textarea type="text" className="form-control" placeholder="New Message.." aria-label="" aria-describedby="basic-addon2"
		      onChange={(e) => {
		              props.channelStore.message = e.target.value;
		              props.channelStore.error = [];}}></textarea>
		  <div className="input-group-append">
		    <button className="btn btn-primary" type="button"
		    onClick={()=>props.channelStore.createNewMessage(props.authStore.username, props.authStore.token, props.currentChannelId)}
		    >Send</button>
		  </div>
		 </div>
  	);
}

export default MessageBox;
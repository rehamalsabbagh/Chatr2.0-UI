import React from 'react';
import {observer} from 'mobx-react';
import axios from 'axios';
import Loading from './Loading';

function formateTime(timestamp){
	let time = timestamp.replace("T", ", ");
	return time.substring(0, time.length - 11);
	//s.substring(0, s.length() - 2)
}

function MessageView(props) {

	    let messages = props.channelStore.messages.map(
	      msgObj => <div class="card">
		  <div class="card-body">
		    <img Style="width:15px;" src="https://use.fontawesome.com/releases/v5.0.10/svgs/regular/smile.svg"/> <span className="username-name">{msgObj.username}</span> <span class="card-text timestamp">{formateTime(msgObj.timestamp)}</span>
		    <h5 class="card-title">{msgObj.message}</h5>
		  </div>
		</div>
	    )

	return (
		<div >
		{props.channelStore.loading?
            <Loading /> :
            <div>
            {messages}
            </div>
			}
	</div>
)};

export default observer(MessageView);
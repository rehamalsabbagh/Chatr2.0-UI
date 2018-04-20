import React from 'react';
import {observer} from 'mobx-react';
import MessageBox from './MessageBox';
import MessageView from './MessageView';
import Loading from './Loading';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'


function ChannelView(props) {
    console.log('ChannelView file');
    console.log(props.channelStore);

    let channel = props.channelStore.getChannel(this.props.match.params.channelID);
      let hamsaChannel ='whatever';
      console.log(this.props.match.params.channelID);
    if(this.props.match.params.channelID==25){
      hamsaChannel = 'hamsaChannel';
    }

    //if(!(channel == undefined)){
      //console.log(channel);
      //let channelName = channel.name;
    //}
    //else{
      //let channelName = '';
    //}

  return (
    <div Style="padding: 40px; height: -webkit-fill-available;" className={hamsaChannel}>
      {props.channelStore.loading?
                Loading :
                <div>
                <FontAwesomeIcon icon={faHashtag} /><spin className="channelName">{channel.name}</spin>
                </div>
      }
      <MessageView currentChannelId={this.props.match.params.channelID} channelStore={props.channelStore} authStore={props.authStore}/>
      <MessageBox currentChannelId={this.props.match.params.channelID} channelStore={props.channelStore} authStore={props.authStore}/>
    </div>
  );
}

export default observer(ChannelView);


import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'

function ChannelNavLink(props) { console.log(props.channel);
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink className="nav-link" to={`/channels/${props.channel.id}`} onClick={()=>props.channelStore.fetchMessages(props.channel.id, props.authStore.token)}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}

export default ChannelNavLink;

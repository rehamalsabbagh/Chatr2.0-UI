import React from 'react';
import {observer} from 'mobx-react';
import Modal from './Modal';


function CreateChannel(props) {
  const channelStore = props.channelStore;
  const authStore = props.authStore;
  const body =  <input className="form-control"
            type="text"
            placeholder="Channel Name"
            //value={channelStore.channelName}
            required
            onChange={(e) => {
              channelStore.channelName = e.target.value;
              channelStore.error = [];}}
            />

  const createChannel = () => {
    const thisModal = window.$('#newChannelModal')
    channelStore.createChannel(props.authStore.token)
      //.then(() => !channelStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'newChannelModal',
    title: 'Create a new channel',
    body: body,
    clickHandler: createChannel,
    authStore: authStore,
    type: 'Create Channel'
  }
  return <Modal {...modalProps} />;
}

export default observer(CreateChannel);
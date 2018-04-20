import {decorate, observable, computed} from 'mobx';
import React from 'react';

import axios from 'axios';

class ChannelStore {
  constructor() {
    this.channels = [];
    this.loading = true;
    this.channelName = '';
    this.error = [];
    this.message = '';
    this.messages = [];
  }

  fetchChannels() {
    return axios.get('http://192.168.100.54/channels/')
            .then(res => res.data)
            .then(channels => {
              this.channels = channels;
              this.loading = false;
              console.log(channels);
            })
            .catch(err => console.error(err));
  }

  getChannel(id) {
    return this.channels.find(channel => channel.id == id);
  }

  createChannel(token){
  return axios.post(
      'http://192.168.100.54/channels/create/',
       { name: this.channelName },
       { headers: {"Authorization": `JWT ${token}`} },
     )
      .then(res => res.data)
      .then((result) => {
        console.log(result)
        this.fetchChannels();
      })
      .catch(err => console.error(err));

    // return axios.post(`http://192.168.100.54/channels/create`, { 
    //   name: this.name,
    //   { headers: {"Authorization" : `JWT ${token}`}}
    // })
  }

  resetForm() {
    this.error = [];
    this.channelName = "";
  }

  createNewMessage(username, token, currentChannelId){
    // this.loading = true;
    console.log(currentChannelId);
    return axios.post(
      `http://192.168.100.54/channels/${currentChannelId}/send/`,
      { message: this.message },
      { headers: {"Authorization": `JWT ${token}`} },
      )

    .then(res => res.data)
      .then((result) => {
        console.log(result)
        this.fetchMessages(currentChannelId,token);
      })
      .catch(err => console.error(err));
  }

  fetchMessages(currentChannelId,token) {
    // this.loading = true;
    console.log(currentChannelId);
    return axios.get(`http://192.168.100.54/channels/${currentChannelId}/`,
      { headers: {"Authorization": `JWT ${token}`} },
      )

            .then(res => res.data)
            .then(messages => {
              this.messages = messages;
              this.loading = false;
              console.log(messages);
            })
            .catch(err => console.error(err));
  }

}


decorate(ChannelStore, {
  channels: observable,
  loading: observable,
  messages: observable,
  channelName :observable,
  error : observable,
  message : observable,
})

const channelStore =  new ChannelStore();
channelStore.fetchChannels();

//console.log('From channelStore');

export default channelStore;

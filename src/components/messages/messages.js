import React from 'react';
import axios from 'axios';
import Message from './message';
import './messages.css';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    axios.get('http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages').then(data => {
      this.setState( { messages: data.data.data } );
    });
  }
  render() {
    return (
      <div className="messages">
        <h1>Welcome to React.js</h1>
        {
          this.state.messages.map(message => {
            return (
              <Message key={message.id} message={message} />
            )
          })
        }  
      </div>
    )
  }
}

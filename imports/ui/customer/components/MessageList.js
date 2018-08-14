import React, { Component } from 'react';
import Message from './Messages/index'
class MessageList extends Component {
    constructor(props) {
        super(props);
    }

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
        <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
        return <Message message={message} key={i} />


        })}

      </div>
    )
  }
}

export default MessageList
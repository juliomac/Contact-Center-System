import React, { Component } from 'react'
import TextMessage from './TextMessage'

class Message extends Component {

  _renderMessageOfType(type) {  //render type of message can be text, photos, emotion...
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
    }
  }
  render () {
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: "url('/chat-icon.svg')"
          }}></div>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message
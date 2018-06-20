import React, { Component } from 'react';
import {ChatRooms} from "../../../../lib/Database";
const TextMessage = (props) => {
  return <div className="sc-message--text">{props.data.text}</div>
    //return ChatRooms.find();

}

export default TextMessage
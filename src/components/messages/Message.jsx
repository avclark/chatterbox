import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Message extends Component {
  render(){
    const {message} = this.props;
    return(
      <div className="message">
        <strong>{message.user}</strong>: {message.text}
      </div>
    )
  }
}

export default Message
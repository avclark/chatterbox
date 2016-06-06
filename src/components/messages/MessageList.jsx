import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './message.jsx';

class MessageList extends Component {
  render(){
    return(
      <div className="callout">
        <h4 className="chatty">Feelin' chatty?</h4>
        {
          this.props.messages.map((message, i) => {
            return <Message message={message} key={i} />
          })
        }
      </div>
    )
  }
}

export default MessageList
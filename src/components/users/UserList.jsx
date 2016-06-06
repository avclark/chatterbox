import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserList extends Component {
  render(){
    return(
      <table className="stack">
        <thead>
          <tr>
            <th>Connected Users: ({this.props.users.length})</th>
          </tr>
        </thead>

        <tbody className="list-group">
        {
          this.props.users.map((user, i) => {
            return <tr><td className="list-group-item" user={user} key={i}>
              {user.name}
            </td></tr>
          })
        }
        </tbody>
      </table>
    )
  }
}

export default UserList
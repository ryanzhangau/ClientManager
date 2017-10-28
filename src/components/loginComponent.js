import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <div className="input-group-label">
            <i className="fa fa-fw fa-user"></i>
          </div>
          <input type="text" className="input-group-field" placeholder="Username" />
        </div>
        <div className="input-group">
          <div className="input-group-label">
            <i className="fa fa-fw fa-lock"></i>
          </div>
          <input type="text" className="input-group-field" placeholder="Password"/>
        </div>
        <div className="row">
          <div className="columns medium-6">
            <button className="button small login">Customer Login</button>
          </div>
          <div className="columns medium-6">
            <button className="button small login">Admin Login</button>
          </div>
        </div>
      </form>
    )
  };
}
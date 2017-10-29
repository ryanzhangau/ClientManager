import React from 'react';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'ryan@anctech.com.au', password: '123456', type: 'admin,customer'},
        {name: 'julie@raywhite.com.au', password: '123456', type: 'customer'},
      ],
      user: {
        name: '',
        password: '',
      }
    }
  }

  setUserName (e) {
    this.setState({user: { ...this.state.user, name: e.target.value }});
  }

  setUserPassword (e) {
    this.setState({user: { ...this.state.user, password: e.target.value }});
  }

  loginAsCustomer (e) {
    e.preventDefault();
    const matchedUsers = this.state.users.filter(u => u.name === this.state.user.name && u.password === this.state.user.password);
    if (matchedUsers[0] && matchedUsers[0].type.indexOf('customer') > -1){
      console.log('Login as Customer');
    }else
      console.log('Not logged in');
  }

  loginAsAdmin (e) {
    e.preventDefault();
    const matchedUsers = this.state.users.filter(u => u.name === this.state.user.name && u.password === this.state.user.password);
    if (matchedUsers[0] && matchedUsers[0].type.indexOf('admin') > -1){
      console.log('Login as Admin');
    }else
      console.log('Not logged in');
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <div className="input-group-label">
            <i className="fa fa-fw fa-user"></i>
          </div>
          <input type="text" className="input-group-field" placeholder="Username"
                 value={this.state.user.name}
                 onChange={this.setUserName.bind(this)}
          />
        </div>
        <div className="input-group">
          <div className="input-group-label">
            <i className="fa fa-fw fa-lock"></i>
          </div>
          <input type="password" className="input-group-field" placeholder="Password"
                 value={this.state.user.password}
                 onChange={this.setUserPassword.bind(this)}/>
        </div>
        <div className="row">
          <div className="columns medium-6">
            <button className="button small login"
                    onClick={this.loginAsCustomer.bind(this)}
            >Customer Login</button>
          </div>
          <div className="columns medium-6">
            <button className="button small login"
                    onClick={this.loginAsAdmin.bind(this)}
            >Admin Login</button>
          </div>
        </div>
      </form>
    )
  };
}
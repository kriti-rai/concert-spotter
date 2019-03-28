import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../.././actions/userActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password_digest: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data =  this.state;
    this.props.registerUser(data, () => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="signup">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <h3 className="card-header">Register</h3>
              <div className="card-body">
                <form className='login-form' onSubmit={ this.handleSubmit }>
                  <div className="input-group form-group">
                      <input type="text" name="username" value={ this.state.username } className="form-control" placeholder="Username"  onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="firstname" value={ this.state.firstname } className="form-control" placeholder="First Name" onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="lastname" value={ this.state.lastname } className="form-control" placeholder="Last Name" onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="email" value={ this.state.email } className="form-control" placeholder="Email Address" onChange={ this.handleChange } />
                  </div>
                    <div className="input-group form-group">
                      <input type="password" name="password_digest" value={ this.state.password_digest } className="form-control" placeholder="Password" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                      <input className="button login_btn" type="submit" value="Sign Up"/>
                    </div>
                </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
};

export default connect(null, { registerUser })(Register);
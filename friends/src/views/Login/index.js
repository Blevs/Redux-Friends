import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import Error from '../../components/Error';

const Login = ({loggingIn, login, error, history}) => {
  const performLogin = event => {
    event.preventDefault();
    event.persist();
    const username =  event.target.username.value,
          password = event.target.password.value;
    login({ username, password })
      .then(() => {
        history.push("/friends-list");
      })
      .catch(() => event.target.password.value = "");
  };
  return (
    <div className={"login" + (loggingIn ? " loading" : "")}>
      {error && <Error error={error}/>}
      <form onSubmit={performLogin}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({loggingIn: state.logginIn, error: state.error});

export default connect(mapStateToProps, { login })(Login);

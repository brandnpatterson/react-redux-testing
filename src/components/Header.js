import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Header extends Component {
  changeAuth = () => {
    this.props.changeAuth(!this.props.auth);
  };

  render() {
    const Button = props => {
      return <button onClick={this.changeAuth}>{props.isLoggedIn}</button>;
    };

    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          <Button isLoggedIn={this.props.auth ? 'Sign Out' : 'Sign In'} />
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { changeAuth }
)(Header);

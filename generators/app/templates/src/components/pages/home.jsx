import React from 'react';
import { connect } from 'react-redux';
import { getData } from 'actions/home-actions';

const HomePage = function HomePage(props) {

  return {
    props,

    clickMe() {
      this.props.dispatch(getData());
    },

    renderStuff() {
      const store = this.props.home.toJS();
      const users = store.data;

      if (!users) {
        return null;
      }

      return users.map((u, i) => {
        let user = u.user;
        return (
          <div key={i} style={{textAlign: 'center'}}>
            <h1>{user.name.first} {user.name.last}</h1>
            <img style={{display: 'block', borderRadius: '50%', margin: '0 auto'}}src={user.picture.medium} />
          </div>
        )
      });
    },

    render() {
      return (
        <div>
          <h1>Random Users</h1>
          <button onClick={this.clickMe.bind(this)}>Click Meeee</button>
          {this.renderStuff()}
        </div>

      )
    }
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

export default connect(mapStateToProps)(HomePage);

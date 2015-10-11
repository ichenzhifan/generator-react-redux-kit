import fetch from 'isomorphic-fetch';

export function getData() {
  return dispatch => {
    fetch('https://randomuser.me/api/', {
      dataType: 'json'
    })
      .then(function(res) {
        res.json().then((json) => {
          dispatch(setUser(json.results))
        });
      });
  }
}

function setUser(user) {
  return {
    type: 'SET_USER',
    user,
    data: Date.now()
  }
}


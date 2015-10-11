import Immutable from 'immutable';

const defaultState = Immutable.Map({
  data: null
});

export default function homeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return state.set('data', action.user);
    default:
      return state;
  }
}

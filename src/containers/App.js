// == Import : npm
import { connect } from 'react-redux';
import App from '../components/App'

import { connectSocket } from '../actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  connectSocket: () => {
    dispatch(connectSocket());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
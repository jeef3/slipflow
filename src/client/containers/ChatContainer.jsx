import { connect } from 'react-redux';

import Chat from '../components/Chat.jsx';

function mapStateToProps(state) {
  return {
    messages: state.messages[state.currentRoomId] || []
  };
}

export default connect(mapStateToProps)(Chat);
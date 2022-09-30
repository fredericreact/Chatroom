import {connect} from 'react-redux';

import MessagesList from '../components/MessageList';



const mapStateToProps = (state)=>({
    list:state.messages.list,
    pseudo: state.user.user.pseudo,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);


import {connect} from 'react-redux';

import MessagesList from '../components/MessageList';



const mapStateToProps = (state)=>({
    list:state.messages.list,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);


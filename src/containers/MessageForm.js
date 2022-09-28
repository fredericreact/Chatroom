import {connect} from 'react-redux';

import MessageForm from '../components/MessageForm';

import {inputChange, messageSubmit} from '../actions/messagesActions'

const mapStateToProps = (state)=>({
    messageText:state.messages.messageText,
});

const mapDispatchToProps = (dispatch) => ({
onMessageChange:(textesaisi)=>{
    dispatch(inputChange(textesaisi));
    
        },
onMessageSubmit:()=>{
    dispatch(messageSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);




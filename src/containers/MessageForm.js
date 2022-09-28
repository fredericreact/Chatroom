import {connect} from 'react-redux';

import MessageForm from '../components/MessageForm';

import {inputChange} from '../actions/messagesActions'

const mapStateToProps = (state)=>({
    messageText:state.messages.messageText,
});

const mapDispatchToProps = (dispatch) => ({
onMessageChange:(textesaisi)=>{
    dispatch(inputChange(textesaisi));
    
        },
onMessageSubmit:()=>{
    console.log('message');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);




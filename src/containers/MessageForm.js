import {connect} from 'react-redux';

import MessageForm from '../components/MessageForm';



const mapStateToProps = (state)=>({
    messageText:state.messages.messageText,
});

const mapDispatchToProps = () => ({
onMessageChange:(textesaisi)=>{
    console.log(textesaisi);
        },
onMessageSubmit:()=>{
    console.log('message');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);




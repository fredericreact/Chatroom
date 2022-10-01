import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const MessageForm =({messageText,onMessageChange,onMessageSubmit, loading,user}) => {
    let placeholder=`Saisissez votre message ${user.pseudo || 'anonyme'}`;

    if (loading) {
        placeholder="Connexion en cours...";
    }

   

    return(
        <form className="message-form" onSubmit={(e)=>{
            e.preventDefault();
            onMessageSubmit();
        }}>
            <input 
            
            className="form-input" 
            type="text" 
            placeholder={placeholder}
            value={messageText}
            onChange={(e)=>{
                const cequiaetesaisi=e.target.value;
                onMessageChange(cequiaetesaisi);
            }}
            
            ></input>
            <button  type="submit" className='form-submit'> &gt; </button>
        </form>
    )
}


MessageForm.propTypes ={
    messageText: PropTypes.string.isRequired,
    onMessageChange : PropTypes.func.isRequired,
    onMessageSubmit: PropTypes.func.isRequired,
}

export default MessageForm
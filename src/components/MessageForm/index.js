import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const MessageForm =({messageText,onMessageChange,onMessageSubmit, loading,user}) => {
    let placeholder="Connectez vous pour tchater";

    if (loading) {
        placeholder="Connexion en cours...";
    }

    if (user.pseudo) {
        placeholder= `Saisissez votre message ${user.pseudo}`
    }

    return(
        <form className="message-form" onSubmit={(e)=>{
            e.preventDefault();
            onMessageSubmit();
        }}>
            <input 
            disabled={!user.pseudo}
            className="form-input" 
            type="text" 
            placeholder={placeholder}
            value={messageText}
            onChange={(e)=>{
                const cequiaetesaisi=e.target.value;
                onMessageChange(cequiaetesaisi);
            }}
            
            ></input>
            <button type="submit" className='form-submit'> &gt; </button>
        </form>
    )
}


MessageForm.propTypes ={
    messageText: PropTypes.string.isRequired,
    onMessageChange : PropTypes.func.isRequired,
    onMessageSubmit: PropTypes.func.isRequired,
}

export default MessageForm
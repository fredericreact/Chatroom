import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const MessageForm =() => {
    return(
        <form className="message-form">
            <input className="form-input" type="text" placeholder="saisie" ></input>
        </form>
    )
}

export default MessageForm
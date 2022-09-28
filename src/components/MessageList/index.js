import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const Messages =() => {
    return(
        <div className='messages'>
        <Message/>
        </div>
    )
}

const Message =()=>{
    return(
<div className='message'>
    <p className='message-author'>Auteur</p>
    <p className='message-content'>Message</p>
</div>
    )
}

export default Messages
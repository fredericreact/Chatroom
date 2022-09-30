import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const Messages =({list, pseudo}) => {
    
    return(
        <div className='messages'>
        {
            list.map((messageObject)=>{
                return(
                    <Message key={messageObject.id} {...messageObject} pseudo={pseudo}/>
                )

            })
        }
        </div>
    )
}


Messages.propTypes ={
    list:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
         
        })
    ).isRequired,
    pseudo: PropTypes.string.isRequired,
};




const Message =({author,content,pseudo})=>{
    return(
<div className={pseudo === author ? 'message' : 'message message-other'}>
    <p className='message-author'>{author}</p>
    <p className='message-content'>{content}</p>
</div>
    )
}


Message.propTypes ={
    author:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
}

export default Messages
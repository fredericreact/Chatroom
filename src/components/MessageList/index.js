import React from 'react';

import PropTypes from 'prop-types'
import './style.scss'
const Messages =({list}) => {
    return(
        <div className='messages'>
        {
            list.map((messageObject)=>{
                return(
                    <Message key={messageObject.id} {...messageObject}/>
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
};




const Message =({author,content})=>{
    return(
<div className='message'>
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
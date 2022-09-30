import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types'
import './style.scss'

const Messages =({list, pseudo}) => {
    
    const maFutureDiv =useRef(null);

    useEffect(()=>{
        console.log('rerendu')
        console.log(maFutureDiv.current);
    },[list]);


    return(


        <div ref={maFutureDiv} id='messages' className='messages'>
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
    pseudo: PropTypes.string,
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
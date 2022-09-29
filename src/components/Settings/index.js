import React from 'react';
import PropTypes from 'prop-types'
import './style.scss'

const Settings =() => {
    
    return(
        <div className='settings'>

       <div className='settings-zone'>
        <button className="toggle-button " type="button">+</button>
       </div>

        <form className='settings-zone'>
        <input
        type="email"
        placeholder='email'
        />

        <input
         type="password"
        placeholder='password'
        />

        <button className="submit-button" type="submit">
            Envoyer
        </button>
        </form>

        </div>
    )
}







export default Settings
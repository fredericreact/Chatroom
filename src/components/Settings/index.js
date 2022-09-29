import React from 'react';
import PropTypes from 'prop-types'
import './style.scss'

const Settings =({
    opened,
    formData,
    onToggle,
    onInputChange,
    onFormSubmit,
}) => {
    
    const handleInputChange =(e)=>{
    console.log(e.target.name, e.target.value)
    const {name, value} =e.target;
    console.log({
        [name]:value,
    })
    onInputChange({
        [name]:value
    });
    }

    return(
        <div className={opened ? 'settings opened'  : 'settings'}>

       <div className='settings-zone'>
        <button 
        className={opened ? "toggle-button opened": "toggle-button "} 
        type="button"
        onClick={onToggle}
        >+</button>
       </div>

        <form className='settings-zone' onSubmit={(e)=>{
            e.preventDefault();
            onFormSubmit();
        }}>
        <input
        name="email"
        type="email"
        placeholder='email'
        value={formData.email}
        onChange={handleInputChange}
        />

        <input
        name="password"
         type="password"
        placeholder='password'
        value={formData.password}
        onChange={handleInputChange}
        />

        <button className="submit-button" type="submit">
            Envoyer
        </button>
        </form>

        </div>
    )
}




Settings.propTypes ={
    opened: PropTypes.bool.isRequired,
    formData: PropTypes.shape({
        email:PropTypes.string.isRequired,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onForSubmit: PropTypes.func.isRequired,
}


export default Settings
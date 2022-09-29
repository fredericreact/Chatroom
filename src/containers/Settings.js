import {connect} from 'react-redux';
import Settings from '../components/Settings';

import { loginInputChange } from '../actions/user';
import { toggleLoginForm } from '../actions/user';

const mapState = (state) =>({
    opened:state.user.opened,
    formData:state.user.formData,
});

const mapDispatch =(dispatch)=>({
    onInputChange:(cequiaetetape)=>{
        console.log(cequiaetetape)
       dispatch(loginInputChange(cequiaetetape))
        },
        onFormSubmit:()=>{
          console.log('il y a submit')
        },
        onToggle:()=>{
          dispatch(toggleLoginForm());
        }
});

export default connect(mapState,mapDispatch)(Settings);
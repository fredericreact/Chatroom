import {connect} from 'react-redux';
import Settings from '../components/Settings';

import { loginInputChange } from '../actions/user';


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
          console.log('il y a affichage')
        }
});

export default connect(mapState,mapDispatch)(Settings);
import {connect} from 'react-redux';
import Settings from '../components/Settings';


const mapState = (state) =>({
    opened:true,
    formData:{email:'hello@g.com', password:'123'},
});

const mapDispatch =(dispatch)=>({
    onInputChange:(cequiaetetape)=>{
        console.log(cequiaetetape);
        },
        onFormSubmit:()=>{
          console.log('il y a submit')
        },
        onToggle:()=>{
          console.log('il y a affichage')
        }
});

export default connect(mapState,mapDispatch)(Settings);
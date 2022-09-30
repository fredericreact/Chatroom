import { LOGIN_INPUT_CHANGE , 
    TOGGLE_LOGIN_FORM, 
    LOGIN_SUBMIT, 
    LOGIN_ERROR, 
    LOGIN_SUCCESS} from "../actions/user";


const initialState={
    loading:false,
    opened:true,
    user:{},
    formData:{
        email:'bouclierman@herocorp.io',
        password:'jennifer',
    },
}



export default (state=initialState,action={}) =>{
    switch(action.type) {

        case LOGIN_SUBMIT:
            return{
              ...state,
              opened:false,
              loading:true,  
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                formData: {email:'',password:''},
                user:{
                    ...action.payload,
                }
            }
        
        case LOGIN_ERROR:
            return {
                ...state,
                user:{},
                loading:false,
                opened:true,
            }    

        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                opened:!state.opened,
            }
        case LOGIN_INPUT_CHANGE:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        default:
            return state;
    }
}
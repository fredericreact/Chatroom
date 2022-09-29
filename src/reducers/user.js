import { LOGIN_INPUT_CHANGE , TOGGLE_LOGIN_FORM} from "../actions/user";


const initialState={
    opened:true,
    formData:{
        email:'hehe@gm.com',
        password:'123',
    },
}


export default (state=initialState,action={}) =>{
    switch(action.type) {
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
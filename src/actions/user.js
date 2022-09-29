export const LOGIN_INPUT_CHANGE ='LOGIN_INPUT_CHANGE';


export const TOGGLE_LOGIN_FORM ='TOGGLE_LOGIN_FORM';


export const loginInputChange = (payload) =>({
    type:LOGIN_INPUT_CHANGE,
    payload,
})


export const toggleLoginForm = () =>({
    type:TOGGLE_LOGIN_FORM,
})
import { LOGIN_SUBMIT, loginSuccess,loginError } from "../actions/user";

import axios from "axios";


const url='http://localhost:3001/login';

export default (store)=>(next)=>(action)=> {

    console.log('laisse passe par middleware');

    next(action);

    switch(action.type) {

    case LOGIN_SUBMIT:
        axios({
            method: 'post',
            url,
            data:store.getState().user.formData,
        })
        .then((res)=>{
            console.log(res.data);
            store.dispatch(loginSuccess(res.data))
        })
        .catch((err)=>{
            console.log(err);
            store.dispatch(loginError())
        });

        break;


    default: 
}

};
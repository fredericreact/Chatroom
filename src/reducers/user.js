const initialState={
    opened:true,
    formData:{
        email:'hehe@gm.com',
        password:'123',
    },
}


export default (state=initialState,action={}) =>{
    switch(action.type) {
        default:
            return state;
    }
}
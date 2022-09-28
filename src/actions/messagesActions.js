export const INPUT_CHANGE ='INPUT_CHANGE';
export const MESSAGE_SUBMIT ='MESSAGE_SUBMIT';

export const inputChange =(text) => ({
    type: INPUT_CHANGE,
    text,
})


export const messageSubmit =() => ({
    type: MESSAGE_SUBMIT,
})
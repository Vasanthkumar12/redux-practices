import { ADD_POST } from '../redux/actionTypes'

export const add_post = (value) => (
    { 
        type: ADD_POST,
        payload: value
    }
)
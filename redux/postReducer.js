import { ADD_POST } from '../redux/actionTypes'

export const postReducer = (state, action) => {
    // console.log(action, state)
    switch (action.type) {
        case ADD_POST:
            return [
                ...state, 
                { id: Date.now(), post: action.payload }
            ]
        default:
            return state
    }
}
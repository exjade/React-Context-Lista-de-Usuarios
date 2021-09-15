// Vamos a definir qué es lo qué se hará cuando se ejecuten
// los nombres que escribimos en Types

import { GET_USERS, GET_PROFILE, DELETE_USER } from '../types/types'

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUsers: payload
            }
        case DELETE_USER:
            return {
                ...state,
                selectedUsers: payload
            }
        default:
            return state;



    }

}
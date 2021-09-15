import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUsers: null,
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }

    const getProfile = async (id) => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    const handleClose = (id) => {
        dispatch({
            type: 'DELETE_USER',
            payload: --id
        })
    }


    return (
        <UserContext.Provider
            value={{
                users: state.users,
                selectedUsers: state.selectedUsers,
                getUsers,
                getProfile,
                handleClose
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
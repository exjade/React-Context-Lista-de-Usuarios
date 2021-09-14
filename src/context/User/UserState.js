import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

const UserState  = (props) => {
    const initialState = {
        users: [],
        selectedUsers: null,
    }
    
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async() => {
       const res = await axios.get('https://reqres.in/api/users')
       console.log(res)
    }
    
    const getProfile = async(id) => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(res)
    }

    return (
        <UserContext.Provider value={ {
            users: state.users,
            selectedUsers: state.selectedUsers,
            getUsers,
            getProfile
        }}>
            {props.childre}
        </UserContext.Provider>
    )
}

export default UserState
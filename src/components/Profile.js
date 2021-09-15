import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

    const { selectedUsers, handleClose } = useContext(UserContext)

    return (
        <>
            {
                selectedUsers ?
                    (
                        <div className="card">
                            <img src={selectedUsers.avatar} className="card-img-top d-flex " alt="avatar" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h5>
                                <p className="card-text text-center">{selectedUsers.email}</p>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleClose(selectedUsers)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )
                    :
                    (<h1>No user selected</h1>)
            }
        </>
    )
}

export default Profile

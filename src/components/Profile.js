import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

    const { selectedUsers, handleClose } = useContext(UserContext)

    return (
        <>
            {
                selectedUsers ?
                    (

                        // <div className="card card-body text-center">
                        //     <h1>{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h1>
                        //     <h3 className="mb-6">{selectedUsers.email}</h3>
                        //     <img src={selectedUsers.avatar} alt="avatar" className="card-img-top rounded-circle m-auto img-fluid"
                        //         style={{ width: 180 }}
                        //     />
                        // </div>

                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 m-auto img-fluid">
                                    <img src={selectedUsers.avatar} alt="avatar" className="img-fluid rounded-start" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h5>
                                        {/* <p className="card-text">{selectedUsers.email}</p> */}
                                        <p className="card-text"><small className="text-muted">{selectedUsers.email}</small></p>
                                        <button type="button" className="d-grid gap-2 d-flex justify-content-end btn btn-outline-dark" onClick={() => handleClose(selectedUsers)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
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

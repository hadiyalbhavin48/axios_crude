import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
    const { id } = useParams()

    const [userList, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: "bhavin@gmail.com",
        avatar: "https://www.melivecode.com/users/cat.png",
        id: id
    })

    const navigate = useNavigate();

    // console.log(userList, "user");
    useEffect(() => {
        const userData = axios.get("https://www.melivecode.com/api/users/" + id)
            .then((res) => {
                console.log(res.data.user, "Update res");
                setUser(res.data.user)
            })
            .catch((err) => {
                console.log(err.message, "Error Message Update");
            })
    }, [])
    const handelSubmit = (e) => {
        e.preventDefault();
        const updateData = axios.put("https://www.melivecode.com/api/users/update", userList)
            .then((res) => {
                // console.log(res, "data Update");
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message, "Update Error");
            })
    }

    return (
        <div>
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            value={userList.fname}
                            onChange={(e) => setUser({ ...userList, fname: e.target.value })}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            value={userList.lname}
                            onChange={(e) => setUser({ ...userList, lname: e.target.value })}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneno">User Name</label>
                        <input
                            type="text"
                            value={userList.username}
                            onChange={(e) => setUser({ ...userList, username: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" name="create">
                        Sign up
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Edit
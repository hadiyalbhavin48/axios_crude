import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: "bhavin@gmail.com",
        avatar: "https://www.melivecode.com/users/cat.png"
    })
    // console.log(user);
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault();

        const userList = axios.post("https://www.melivecode.com/api/users/create", user, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res, "res");
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message, "Registration Error");
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
                            onChange={(e) => setUser({ ...user, fname: e.target.value })}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...user, lname: e.target.value })}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneno">User Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="form-control"
                            id="exampleInputPassword"
                            name="password"
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

export default Registration
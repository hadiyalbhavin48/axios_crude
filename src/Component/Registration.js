import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const [userList, setUserList] = useState({
        name: "",
        detail: "",
        coverimage: "https://www.melivecode.com/attractions/rsu.png",
        latitude: "",
        longitude: "",
        password: ""
    })

    const token = localStorage.getItem("token")
    // console.log(token);
    // console.log(userList);

    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()

        const userData = axios.post("https://www.melivecode.com/api/auth/attractions/create", userList, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Brearer ${token}`
            }
        })
            .then((res) => {
                console.log(res, "user Registraion");
                alert("Registraion Successfully...")
                navigate("/user")
            })
            .catch((err) => {
                console.log(err.message, "Registraion Error");
            })

    }
    return (
        <div>
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUserList({ ...userList, name: e.target.value })}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">latitude</label>
                        <input
                            type="text"
                            onChange={(e) => setUserList({ ...userList, latitude: e.target.value })}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneno">longitude</label>
                        <input
                            type="text"
                            onChange={(e) => setUserList({ ...userList, longitude: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setUserList({ ...userList, password: e.target.value })}
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
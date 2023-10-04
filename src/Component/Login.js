import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: '',
        "expiresIn": 12600000
    });

    // console.log(user);
    // validation 
    const [usernameError, setusernameError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [bothError, setBothError] = useState();
    // console.log(usernameError, passwordError, "passwordError");

    // const navigate = useNavigate();

    // const userData = {
    //     username: username,
    //     password: password,
    //     "expiresIn": 12600000
    // }

    const isValidation = () => {
        setBothError('');
        let isvalid = true;

        if (user.username.trim() === '') {
            setusernameError("Please Enter username")
            isvalid = false;

        } else {
            setusernameError('')
        }
        if (!user.password || user.password.trim() === '') {
            setpasswordError("Please Enter password")
            isvalid = false;


        } else {
            setpasswordError('');
        }

        return isvalid

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidation()) {

            const userD = axios.post("https://www.melivecode.com/api/login", user)
                .then((res) => {
                    // console.log(res, "res");
                    const token = res.data.accessToken
                    // console.log(token, "token");
                    localStorage.setItem("token", token)
                    alert("Login Successfully....")
                })
                .catch((err) => {
                    console.log(err.message, "Login Error");
                })
        }

    }
    return (
        <>
            {/* Login Form */}
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Login</h2>
                            </div>
                            <div className="card-body">
                                {/* <h3 id='valid' className=' mt-2' style={{ color: "red" }}></h3> */}
                                <h3 id='valid' className=' mt-2' style={{ color: "red" }}>{bothError}</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="username" className="form-label">
                                            Username/Email
                                        </label>
                                        <input
                                            type="text"
                                            // onChange={e => setusername(e.target.value)}
                                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                                            className="form-control" id="username" />
                                        {/* <p style={{ color: "red" }}>{usernameError}</p> */}
                                        {usernameError === '' ? null :
                                            <p style={{ color: "red" }}>{usernameError}</p>}

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            // onChange={e => setpassword(e.target.value)}
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                            className="form-control" id="password" />
                                        <p style={{ color: "red" }}>{passwordError}</p>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary main-bg">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const { id } = useParams()
    const [userList, setUserList] = useState({
        name: "",
        latitude: "",
        longitude: "",
        id: id
    })

    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

        const updateData = axios.put("https://www.melivecode.com/api/auth/attractions/update", userList, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Brearer ${token}`
            }
        }).then((res) => {
            console.log(res, " res");
            navigate("/user")
        })
            .catch((err) => {
                console.log(err.message, "Update Error");
            })

    }

    useEffect(() => {
        const userData = axios.get("https://www.melivecode.com/api/attractions/" + id)
            .then((res) => {
                // console.log(res.data.attraction, "update Res");
                setUserList(res.data.attraction)
            })
            .catch((err) => {
                console.log(err.message, "update Error");
            })
    }, [])
    return (
        <div>
            <div className="container">
                <h2>Update Form</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">Name</label>
                        <input
                            type="text"
                            value={userList.name}
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
                            value={userList.latitude}
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
                            value={userList.longitude}
                            onChange={(e) => setUserList({ ...userList, longitude: e.target.value })}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" name="create">
                        Save
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Edit
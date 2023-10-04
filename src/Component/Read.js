import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Read = () => {
    const [userList, setUserList] = useState('')
    const { id } = useParams()
    // console.log(id, "id");
    console.log(userList, "userList");

    useEffect(() => {
        const userDetails = axios.get("https://www.melivecode.com/api/attractions/" + id)
            .then((res) => {
                const resData = res.data.attraction
                // console.log(resData, "res Details");
                setUserList(resData)
            })
    }, [])
    return (
        <div>
            <h1>User Details</h1>
            <div className="card d-flex justify-content-center" style={{ width: "18rem" }}>
                <img className="card-img-top" src={userList.coverimage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{userList.id}</h5>
                    <p className="card-text">

                        {userList.name}
                    </p>
                    <NavLink to="/user" className="btn btn-primary">Go User List</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Read
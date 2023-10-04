import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const User = () => {
    const [userList, setUserList] = useState([])
    console.log(userList, " userList");
    const navigate = useNavigate();

    // Details
    const userDetails = (id) => {
        navigate("/read/" + id)
    }

    // Create User

    const addUser = () => {
        navigate("/registration");
    }

    // Edit

    const editUser = (id) => {
        navigate("/edit/" + id)
    }

    // Delete

    const userDelete = (id) => {

        const deleteUser = axios.delete(" https://www.melivecode.com/api/attractions/delete", id)
            .then((res) => { })
            .catch((err) => {
                console.log(err.message, "Delete Error");
            })
    }


    useEffect(() => {
        const userData = axios.get("https://www.melivecode.com/api/attractions")
            .then((res) => {
                const resData = res.data
                // console.log(resData.id, "res");

                setUserList(resData)
            })
        // console.log(userData);
    }, [])
    return (
        <div>
            <div>
                <button
                    onClick={addUser}
                    className='btn btn-primary mb-3'
                    style={{ float: "left" }}
                >Create User</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>coverimage</th>
                        <th>name</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList && userList.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.coverimage} className='table_img' /></td>
                                <td>{item.name}</td>
                                <td>{item.latitude}</td>
                                <td>{item.longitude}</td>
                                <td><button
                                    onClick={() => editUser(item.id)}
                                    className='btn btn-primary'>Edit</button></td>
                                <td><button className='btn btn-info'
                                    onClick={() => userDetails(item.id)}
                                >Read</button></td>
                                <td><button
                                    onClick={() => userDelete(item.id)}
                                    className='btn btn-danger'>Delete</button></td>
                            </tr>
                        })

                    }


                </tbody>
            </Table>
        </div>
    )
}

export default User
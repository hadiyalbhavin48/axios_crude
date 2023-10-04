import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const User = () => {
    const [userData, setUserData] = useState([])
    const [fleg, setFleg] = useState(false)
    console.log(userData, "userData");

    const navigate = useNavigate()

    // add
    const addUser = () => {
        navigate("/registration")
    }

    // edit

    const editUser = (id) => {
        navigate("/edit/" + id)

    }

    // delete
    const userDelete = (id) => {
        // console.log(id);
        const requestBody = {
            id: id
        };

        const userDeleteList = axios.delete("https://www.melivecode.com/api/users/delete", {
            data: requestBody
        })
            .then((res) => {

                // first Way ->
                // setUserData((result) => result.filter((output) => output.id !== id))

                // Second Way ->
                // getData();

                // Thrid Way -> 

                setFleg(true)

            })


    }

    // delete Second Way

    // const getData = () => {
    //     const usData = axios.get("https://www.melivecode.com/api/users")
    //         .then((res) => {
    //             const resData = res.data
    //             // console.log(resData, "User");
    //             setUserData(resData)
    //         })
    //     // console.log(userData);

    // }

    // delete Second Way

    // useEffect(() => {
    //     getData();
    // }, [])


    // delete Thrid Way

    useEffect(() => {
        const usData = axios.get("https://www.melivecode.com/api/users")
            .then((res) => {
                const resData = res.data
                // console.log(resData, "User");
                setUserData(resData)
            })
    }, [fleg])


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
                        {/* <th>coverimage</th> */}
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData && userData.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>

                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.username}</td>
                                <td><button
                                    onClick={() => editUser(item.id)}
                                    className='btn btn-primary'>Edit</button></td>

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
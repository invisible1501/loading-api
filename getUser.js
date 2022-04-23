import React from "react";
//import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { GetUserAction, DeleteUser } from "./actions";
import ReactLoading from "react-loading";

import './getUser.css'

function GetUser(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState([]);
    const arrUser = useSelector(state => state.users);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(GetUserAction());
    }, []);

    useEffect(() => {
        setUser(arrUser);
    }, [arrUser]);

    const handleDelete = (user_id) => {
        dispatch(DeleteUser(user_id))
    }

    return (
        <div id="wrapper">
            <div className="content">
            {!isLoading ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.map(userItem => {
                            return (
                                <tr key={userItem.id}>
                                    <td>{userItem.id}</td>
                                    <td>{userItem.name}</td>
                                    <td>{userItem.username}</td>
                                    <td>{userItem.email}</td>
                                    <td>{userItem.phone}</td>
                                    <td>
                                        <button onClick={() => handleDelete(userItem.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <div className="wrap_loading">
                    <ReactLoading className="loading" type="bubbles" color="#0000FF" height={100} width={50} />
                </div>
            )}
            </div>
        </div>
    )
}

export default GetUser;
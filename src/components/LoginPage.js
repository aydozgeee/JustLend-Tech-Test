import React from 'react'
import { useState } from 'react';

import '../style/LoginPage.css';
import JustlendLogo from '../images/justLend.svg';
import { Login } from '@mui/icons-material';
import JustLendLogo from '../images/just_lend_logo.png';

export default function LoginPage(props) {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function login() {
        var postData = JSON.stringify({
            "user": userName,
            "password": userPassword
        });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: postData
        };
        fetch('http://localhost:3030/login', requestOptions)
            .then(response => response.json())
            .then(response => {

                if (response.status == 200) {
                    console.log("login ok ", response.username)
                    props.setSelectedUser(2)
                }
                else {
                    props.setSelectedUser(null)

                }

            })


    }


    return (
        <div className='loginPage'>
            <form className='form' style={{ marginTop: "15%" }}>
                <img style={{ heigh: "20px", width: "96px", aspectRatio: 96 / 22, marginTop: "20px", marginLeft: "1 % " }} src={JustLendLogo}></img>

                <div className="input-group">

                    <label htmlFor="email">Email</label>
                    <input className='form_input' id='email' type="email" onChange={(event) => { setUserName(event.target.value) }} required placeholder="Enter email address"></input>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input className='form_input' type="password" onChange={(event) => { setUserPassword(event.target.value) }} required placeholder="Enter your password"></input>
                </div>

                <div className="input-group">
                    <a style={{ marginLeft: "-450px", color: "#7fffd4" }} href='/password/resetRequest'>Forgatten Password?</a>
                </div>
            </form>

            <div className='buttonDiv'>
                <button className='primary' type='submit' onClick={login}>
                    Login
                </button>

            </div>
        </div>




    )
}

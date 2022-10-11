import React from 'react'
import { useState, useEffect } from 'react';

import '../style/Dashboard.css';
import JustLendLogo from '../images/just_lend_logo.png';


import NavBar from './NavBar';
import ChangedPage from './ChangedPage';



export default function Home() {
    let [selectedValue, setSelectedValue] = useState();

    return (
        <>

            <div style={{ height: "65px", width: "100%", borderBottom: "1px solid rgba(0, 0, 0, 0.12)", borderWidth: "1px", borderColor: "#CECECE" }}>
                <img style={{ heigh: "20px", width: "96px", aspectRatio: 96 / 22, marginTop: "20px", marginLeft: "1 % " }} src={JustLendLogo}></img>
            </div>
            <div id={"homeDiv"} className="homeDiv">
                <div style={{ heigh: "20px" }}>
                </div>
                <div id={"column1"} className="column1">
                    <div id={"column1Top"} className="column1Top">
                        <div style={{ flex: 1 }}>
                            <NavBar
                                setSelectedValue={(value) => {
                                    setSelectedValue(value)
                                }}
                            >

                            </NavBar>

                        </div>
                    </div>
                </div>
                <div className='changedPage_div'>
                    <ChangedPage
                        setValue={selectedValue}
                    ></ChangedPage>
                </div>
            </div>

        </>
    )
}

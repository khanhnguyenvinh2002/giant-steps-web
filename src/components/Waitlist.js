import React,{useState} from 'react';
import './Waitlist.css'
import backarrow from "./../img/backarrow.svg"
import {Link} from "react-router-dom";
import validator from 'validator';
import GoogleSheets from './GoogleSheets'
import SpreadSheet from './SpreadSheet'

function Waitlist(){
    return(
        <div style={{height: '100vh', backgroundColor: '#292a2e'}}>
        <div className="main-header-waitlist">
           <div className="content">
               
                <Link to="/">
                    <img style={{width: 40,height: 40}} src={backarrow} alt="backarrow"/>
                </Link>
                <div style={{paddingTop: 50, width: '60%'}}>
                    <span className="join-waitlist" > Join the waitlist.</span>
                </div>
                <div className="sub-title" style={{ width: '60%'}}>Be the first to know when we're ready.</div>
                <br/>
                <GoogleSheets/>
           </div>
        </div>
        </div>
    );
}

export default Waitlist;

  
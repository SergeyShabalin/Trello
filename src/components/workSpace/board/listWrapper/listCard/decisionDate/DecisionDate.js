import React from 'react';
import {AiOutlineFieldTime} from "react-icons/ai";
import classes from './style/DecisionDate.module.css'

export default function DecisionDate(){
    return (
        <div className={classes.decision_date}>
            <div className={classes.icon}><AiOutlineFieldTime/></div>
            <div className={classes.date}> 17 янв. 2022 г.</div>
        </div>
    );
};


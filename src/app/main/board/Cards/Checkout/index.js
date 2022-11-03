import React from 'react';
import {IoMdCheckboxOutline} from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import classes from './Checkout.module.css';
import { useSelector } from "react-redux";


export default function Checkout({countTask, doneTask}){

    return (
          <div className={classes.checkout}>
           <div className={classes.icon}><IoMdCheckboxOutline/></div>
            <span className={classes.tasks}>{doneTask}/{countTask}</span>
            {/*<MdOutlineCheckBoxOutlineBlank/>*/}
        </div>
    );
};


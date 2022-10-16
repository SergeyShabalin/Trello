import React from 'react';
import {IoMdCheckboxOutline} from "react-icons/io";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";
import classes from './Checkout.module.css'


export default function Checkout({check}){
    return (
          <div className={classes.checkout}>
           <div className={classes.icon}><IoMdCheckboxOutline/></div>
            <div className={classes.tasks}>3/5</div>
            {/*<MdOutlineCheckBoxOutlineBlank/>*/}
        </div>
    );
};


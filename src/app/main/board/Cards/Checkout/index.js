import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import classes from "./Checkout.module.css";


export default function Checkout({ countTask, doneTask }) {

  return (
    <> {
      countTask < 1 ? null
        : <div className={doneTask === countTask ? classes.checkout_done : classes.checkout}>
          <div className={classes.icon}><IoMdCheckboxOutline /></div>
          <span className={classes.tasks}>{doneTask}/{countTask}</span>
        </div>
    }
    </>

  );
};


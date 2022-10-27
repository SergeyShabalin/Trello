import React from "react";
import classes from './DeleteCheckList.module.css';
import { MdClear } from "react-icons/md";
import Button from "../../../../../../components/basic/Button";

export default function DeleteCheckTask(){
  return (
    <div className={classes.context_menu_wrapper}>
      <Button
        variant={"just_icon"}
        icon={<MdClear />}>
      </Button>
    </div>
  );
};


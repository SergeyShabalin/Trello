import React, { useEffect, useState } from "react";
import classes from "./InviteModal.module.css";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";

import { BsCheck2Circle } from "react-icons/bs";
import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";

export default function InviteModal() {

  const [ref, setRef] = useState("");
  const {isContext, contextClose, contextOpen} = useOpenCloseContext()

  const currentUrl = window.location.href;
  useEffect(() => {
    setRef(currentUrl);
  });

  function select({ target }) {
    target.select()
  }

  function copyRef(){
    navigator.clipboard.writeText(ref)
    contextOpen()
    setTimeout(contextClose, 3000)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <span className={classes.title}>Поделиться доской</span>
          <div className={ isContext ? classes.ref : classes.ref_hidden }>
            <BsCheck2Circle />
            <span className={classes.save}> ссылка скопирована </span>
          </div>
      </div>

      <form className={classes.input}>
        <Input
          onFocus={select}
          autoFocus
          value={ref}
          variant="transparent"
          container="custom"
          placeholder="Введите название карточки"
        />
      </form>

        <Button
          onClick={copyRef}
          variant="contained"
          color="blue"
          label="Копировать ссылку"
        />

    </div>
  );
};

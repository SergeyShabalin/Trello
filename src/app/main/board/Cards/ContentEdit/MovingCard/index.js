import React, { useRef } from "react";
import classes from "./MovingCard.module.css";
import useOnClickOutside from "../../../../../../hooks/UseOnClickOutside";
import Button from "../../../../../../components/basic/Button";
import { MdClear } from "react-icons/md";

export default function MovingCard({ closeMoving }) {
  const ref = useRef();

  useOnClickOutside(ref, closeMoving);

  return (
    <div className={classes.wrapper} ref={ref}>
      <div className={classes.header}>
        <span className={classes.title}>Перемещение карточки</span>
          <Button  onClick={closeMoving} variant="just_icon" icon={<MdClear />} />
      </div>
    </div>
  );
};


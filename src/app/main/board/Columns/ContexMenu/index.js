import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoKebabHorizontal } from "react-icons/go";
import { MdLibraryAdd, MdDriveFileMoveOutline } from "react-icons/md";

import { deleteColumn } from "../../../../../store/columns/asyncActions";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./ListContextMenu.module.css";

function ListContextMenu({ columnId }) {

  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  useOnClickOutside(ref, () => setModalOpen(false));

  function modalOpen() {
    setModalOpen(true);
  }

  function viewAddCard() {
    setModalOpen(false);
  }

  function columnDelete() {
    if (window.confirm("Удалить колнку?")) {
      dispatch(deleteColumn(columnId));
    }
  }

  return (
    <div>
      <Button
        onClick={modalOpen}
        variant={"just_icon"}
        icon={<GoKebabHorizontal />}>
      </Button>

      {isModalOpen &&
        <form  ref={ref}>
          <div className={classes.context_menu}>
            <span className={classes.context_header}>Действия со списком</span>
            <hr />
            <ul className={classes.ul}>
              <li className={classes.li}
                  onClick={columnDelete}>
                <RiDeleteBin5Line /> <span className={classes.li_header}>Удалить список</span>
              </li>
            </ul>
          </div>
        </form>
      }
    </div>
  );
};

export default ListContextMenu;
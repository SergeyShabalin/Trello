import React, { useEffect, useState } from "react";
import Button from "../../../../components/basic/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import ContextMenu from "../ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoard, getCurrentBoard } from "../../../../store/board/asyncActions";
import classes from "./Workspaces.module.css";
import "./Colors.css";

export default function Workspaces({ icon }) {

  const [isContext, setIsContext] = useState(false);
  const dispatch = useDispatch();

  const allBoards = useSelector(state => state.board.allBoards);

  useEffect(() => {
    dispatch(getAllBoard());
  }, []);

  function setBoard(boardId) {
    dispatch(getCurrentBoard(boardId));
    closeContextMenu();
  }

  function openContextMenu() {
    setIsContext(true);
  }

  function closeContextMenu() {
    setIsContext(false);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const colorsIcon = ["iconRed", "iconBlue", "iconGreen", "iconYellow",
    "iconMagenta", "iconDark" , "iconGrBl", "iconOrange"];

  const allWorkspaces = allBoards.map(board => {
      const color = getRandomInt(8);
      return (
        <div key={board._id}
             className={classes.wrapper}
             onClick={() => setBoard(board._id)}>
          <div className={colorsIcon[color]}>{board.title.substr(0, 1)}</div>
          <span className={classes.workspaces}> {board.title}</span>
        </div>
      );
    }
  );

  return (
    <div>
      <Button
        onClick={openContextMenu}
        variant="text"
        name="work_area"
        label="Рабочие пространства"
        endIcon={<MdKeyboardArrowDown />}>
      </Button>

      {isContext && <ContextMenu
        closeContextMenu={closeContextMenu}
        title="Рабочие пространства"
        allWorkspaces={allWorkspaces} />
      }
    </div>
  );
};


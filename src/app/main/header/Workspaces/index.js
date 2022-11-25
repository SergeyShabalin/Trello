import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getAllBoard, getCurrentBoard } from "../../../../store/board/asyncActions";
import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import ContextMenu from "../ContextMenu";
import Button from "../../../../components/basic/Button";
import classes from "./Workspaces.module.css";
import "./Colors.css";

export default function Workspaces() {

  const dispatch = useDispatch();
  const location = useLocation();
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const allBoards = useSelector(state => state.board.allBoards);

  useEffect(() => {
    dispatch(getAllBoard());
  }, []);

  function setBoard(boardId) {
    dispatch(getCurrentBoard(boardId));
    contextClose();
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const colorsIcon = ["iconRed", "iconBlue", "iconGreen", "iconYellow", "iconMagenta",
    "iconDark", "iconGrBl", "iconOrange"];

  const allWorkspaces = allBoards.map(board => {
    const color = getRandomInt(8);
      return (
        <div key={board._id}
             className={classes.wrapper}
             onClick={() => setBoard(board._id)}>
          <div className={colorsIcon[color]}>{board.title.substr(0, 1)}</div>
          <Link className={classes.link} state={{ background: location }} to={`/board/${board._id}`}>
            <span className={classes.workspaces}> {board.title}</span>
          </Link>
        </div>
      );
    }
  );

  return (
    <div>
      <Button
        onClick={contextOpen}
        variant="text"
        name="work_area"
        label="Рабочие доски"
        endIcon={<MdKeyboardArrowDown />} />

      {isContext && <ContextMenu
        closeContextMenu={contextClose}
        content={allWorkspaces}
        title="Рабочие доски" />
      }
    </div>
  );
};

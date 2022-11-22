import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";



export default function Main() {
  const dispatch = useDispatch();
  const currentBoard = useSelector(state => state.board.boards[0]);

  useEffect(() => {
     dispatch(getCurrentBoard('63776cc4d06f52c17e22b67c'));
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.header_main}>
        <Header />
        <div className={classes.work_space}>
          <Board currentBoard={currentBoard}  />
        </div>
      </div>
    </div>

  );
}
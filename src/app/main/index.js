import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";



export default function Main() {
  const dispatch = useDispatch();
  const boardStore = useSelector(state => state.board.boards);
  const [countBoard, setCountBoard] = useState(0);

  useEffect(() => {
     dispatch(getBoard(countBoard));
  }, []);

//нужно передать id board в диспатч получения всех колонок
  return (
    <div className={classes.main}>
      <div className={classes.header_main}>
        <Header />
        <div className={classes.work_space}>
          <Board boardStore={boardStore} countBoard={countBoard}  />
        </div>
      </div>
    </div>

  );
}
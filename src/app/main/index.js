import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";
import Greeting from "./Greeting";

export default function Main() {

  const dispatch = useDispatch();
  const currentBoard = useSelector(state => state.board.currentBoard);
  const { boardId } = useParams();

  useEffect(() => {

    boardId && dispatch(getCurrentBoard(boardId));
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.header_main}>

        <Header />
        <div className={classes.work_space}>
          {currentBoard !== "empty"
            ? <Board currentBoard={currentBoard} />
            : <Greeting />
          }
        </div>
      </div>
    </div>

  );
}
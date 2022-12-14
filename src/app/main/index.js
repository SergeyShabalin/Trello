import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import Greeting from "./Greeting";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";

export default function Main() {

  const dispatch = useDispatch();
  const currentBoard = useSelector(state => state.board.currentBoard);
  const isError = useSelector(state => state.board.isErrorServer);
  const { boardId } = useParams();


  useEffect(() => {
    boardId && dispatch(getCurrentBoard(boardId));
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.header_main}>

        <Header
          visibility={(isError || !currentBoard._id)}
        />
        <div className={classes.work_space}>
          {(isError || !currentBoard._id)
            ? <Greeting currentBoard={currentBoard} isError={isError}/>
            : <Board currentBoard={currentBoard} />
          }
        </div>
      </div>
    </div>

  );
}
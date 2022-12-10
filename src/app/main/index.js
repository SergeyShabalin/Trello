import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  const isLoader = useSelector(state => state.board.isLoading);
  const isError = useSelector(state => state.board.isErrorServer);
  const { boardId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    boardId && dispatch(getCurrentBoard(boardId));
  }, []);


  return (
    <div className={classes.main}>
      <div className={classes.header_main}>

        <Header
          visibility={(pathname.length < 6 || isError || !currentBoard._id)}
        />
        <div className={classes.work_space}>
          {(pathname.length < 6 || isError || !currentBoard._id)
            ? <Greeting currentBoard={currentBoard} />
            : <Board isLoader={isLoader} currentBoard={currentBoard} />
          }
        </div>
      </div>
    </div>

  );
}
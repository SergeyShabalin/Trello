import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";


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
          {/*TODO поставить условие отсутствия доски*/}
          {currentBoard !== "empty"
            ? <Board currentBoard={currentBoard} />
            : <div className={classes.greeting_wrapper}>
              <div className={classes.content}>
                <span className={classes.greeting_title}>WELCOME TO TASK MANAGER</span>
                <span className={classes.greeting_description}>Для создания новой доски нажмите кнопку "создать" в верхней панели</span>
              </div>
              </div>
          }
        </div>
      </div>
    </div>

  );
}
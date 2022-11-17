import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../store/board/asyncActions";
import Board from "./Board";
import Header from "./Header";
import classes from "./Main.module.css";
import "../../GlobalStyles.css";



export default function Main() {
  const dispatch = useDispatch();
  const boardStore = useSelector(state => state.board.boardTitle);

  useEffect(()=>{
    dispatch(getBoard())
  }, [])

  const title = (boardStore &&  boardStore[0].title);
  console.log(title);
  return (
    <div className={classes.main}>
      <div className={classes.header_main}>
        <Header />
        <div className={classes.work_space}>
          <Board title={title} />
        </div>
      </div>
    </div>

  );
}
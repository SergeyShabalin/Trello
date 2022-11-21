import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";


export const getBoard = (countBoard) => async (dispatch) => {

  try {
    const resp = await BoardApi.getBoardAPI(countBoard);
    const boards = resp.data.map(i=>i)
    console.log(boards);
    dispatch(BoardAC.viewBoard(boards));
  } catch (error) {
    console.warn(error, "server error");
  }
};
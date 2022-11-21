import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";


export const getBoard = (boardId) => async (dispatch) => {

  try {
    const resp = await BoardApi.getBoardAPI(boardId);
    const boards = resp.data.map(i=>i)
    dispatch(BoardAC.viewBoard(boards));
  } catch (error) {
    console.warn(error, "server error");
  }
};
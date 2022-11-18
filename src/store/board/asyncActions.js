import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";


export const getBoard = () => async (dispatch) => {

  try {
    const resp = await BoardApi.getBoardAPI();
    const boards = resp.data.map(i=>i)
    dispatch(BoardAC.viewBoard(boards));
  } catch (error) {
    console.warn(error, "server error");
  }
};
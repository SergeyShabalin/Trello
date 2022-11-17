import BoardApi from "../../api/BoardApi";
import { BoardAC } from "../board/actions";


export const getBoard = () => async (dispatch) => {

  try {
    const resp = await BoardApi.getBoardAPI();
    dispatch(BoardAC.viewBoard(resp.data));
  } catch (error) {
    console.warn(error, "server error");
  }
};
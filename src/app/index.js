import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UiKit from "../components/basic/UiKit";
import Main from "./main";
import CardModal from "./main/Board/CardModal";


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/*" element={<Main/>} />
        <Route path="/board/:boardId" element={<Main/>}/>
        <Route path="/ui" element={<UiKit />} />
        <Route path="/board/:boardId/card/:cardId" element={<CardModal/>}/>
      </Routes>
      {background && (
      <Routes>
        <Route path="/board/:boardId/card/:cardId" element={<CardModal />}/>
      </Routes>
        )}
    </>
  );
}

export default App;







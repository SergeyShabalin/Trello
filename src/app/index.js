import React from "react";
import { Routes, Route } from "react-router-dom";
import UiKit from "../components/basic/UiKit";
import Main from "./main";
import Todo from "../Todo";
import CardModal from "./main/Board/CardModal";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route path="card/:cardId" element={<CardModal />} />
      </Route>
      <Route path="/ui" element={<UiKit />} />
    </Routes>
  );
}

export default App;







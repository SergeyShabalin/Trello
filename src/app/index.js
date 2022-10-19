import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UiKit from "../components/basic/UiKit";
import Main from "./main";


function App() {
        return (
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/ui" element={<UiKit/>}/>
            </Routes>
        );
}

export default App;


// style //TODO+++
// directores //TODO+++
// убрать id из стора listContextMenu//TODO+++
// сократить санки //TODO+++
// /columns/delete/${columnId}` == /columns/${columnId}`//TODO+++
// убрать dispatch(getAllColumns())//TODO+++
// создать папку api //TODO+++
// придумать как отображать header (transform/tooltip/text)!!! //TODO+++
// isFullSize button //TODO+++
// переписать меню на список !!! //TODO+++
// заменить div на span or p для текста !!! //TODO+++
// создать hook https://usehooks.com/page/3 !!! //TODO+++
// переписать редакс (по желанию) //TODO+++

//  В Board исправить вывод карточек //TODO+++
//Пофиксить несоответсие типов HeaderEdit стр 26
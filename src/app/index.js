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
// убрать id из стора listContextMenu
// сократить санки //TODO+++
// /columns/delete/${columnId}` == /columns/${columnId}`
// убрать dispatch(getAllColumns())
// создать папку api
// придумать как отображать header (transform/tooltip/text)!!!
// isFullSize button
// переписать меню на список !!!
// заменить div на span or p для текста !!!
// создать hook https://usehooks.com/page/3 !!!
// переписать редакс (по желанию) //TODO+++
import Menu from "./menu/Menu";
import Board from "./board/Board";
import Header from "./header/Header";

import '../../GlobalStyles.css'
import './styles/Main.css'


export default function Main() {

    return (
        <div className='main'>
            <div className='header-main'>
                <Header/>
                <div className='work_space'>
                    <Menu/>
                    <Board/>
                </div>
            </div>
        </div>

    )
}
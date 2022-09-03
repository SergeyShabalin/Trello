import WorkSpace from "../workSpace/WorkSpace";
import Header from "../header/Header";
import Menu from "../menu/Menu";

import './styles/Main.css'
import '../globalStyles/GlobalStyles.css'

export default function Main(){

    return(
        <div >
           <div className='header-main'>

                <Header/>
                <WorkSpace/>
                <Menu/>
        </div>

        </div>

    )
}
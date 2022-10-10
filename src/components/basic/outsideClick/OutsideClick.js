import React, {useEffect, useState, useRef} from "react";
import ListContextMenu from "../../../app/main/board/listWrapper/listContextMenu/ListContextMenu";

import "./styles/OutsideClick.css";

function OutsideClick({children}) {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
           addClick()
    }, [])

    function addClick() {
        document.addEventListener(`click`, ({target}) => {
            const cur = menuRef.current
            if (cur && cur.contains(target)) return
            setIsOpen(false)
            return () => document.removeEventListener('click', addClick);
        });
    }

    return (
        <div ref={menuRef} className={isOpen ? "menu -active" : "menu "}>
            <div onClick={toggle}>
                {children}
            </div>
            <div className="menu__list">
                <ListContextMenu/>
            </div>
        </div>
    );
};

export default OutsideClick;
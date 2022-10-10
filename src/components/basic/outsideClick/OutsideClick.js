import React, {useEffect, useState, useRef} from "react";
import "./styles/OutsideClick.css";

function OutsideClick({children, external}) {

    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      const addClick =()=> {
          document.addEventListener(`click`, ({target}) => {
              const cur = menuRef.current
              if (cur && cur.contains(target)) return
              setIsOpen(false)
              return () => document.removeEventListener('click', addClick);
          });
      }
    }, [])

    return (
        <div ref={menuRef} className={isOpen ? "menu -active" : "menu "}>
            <div onClick={toggle}>
                {external}
            </div>
            <div className="menu__list">
                {children}
            </div>
        </div>
    );
};

export default OutsideClick;
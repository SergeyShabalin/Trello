import React, {useEffect, useState, useRef} from "react";
import "./styles/OutsideClick.css";

function OutsideClick({children, external, type = 'context'}) {

    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const onClick = e => menuRef.current.contains(e.target) || setIsOpen(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <div className='outside_wrapper'>
                 <div onClick={toggle} ref={menuRef} className={isOpen ? "menu -active" : "menu "}>
                    {type === 'context' ?
                        <div>
                            <div>{external}</div>
                            <div className="menu__list">{children}</div>
                        </div>

                        : <div className='replace'>
                            <div className={isOpen ? 'externalClose' : null}>{external}</div>
                            {isOpen ?  <div className="menu__list">{children}</div> : null}
                        </div>
                    }
                </div>
        </div>
    );
};

export default OutsideClick;
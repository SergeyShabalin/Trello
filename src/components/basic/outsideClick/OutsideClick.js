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
            <div ref={menuRef} className={isOpen ? "menu -active" : "menu "}>
                {type === 'context'
                    ? <div>
                        <div onClick={toggle}>
                            {external}
                        </div>
                        <div className="menu__list">
                            {children}
                        </div>
                    </div>
                    : <div>
                        <div onClick={toggle}>
                            <div className={isOpen ? 'externalClose' : null}>{external}</div>
                        </div>
                        <div className="menu__list">
                            {isOpen ? <div>{children}</div> : null}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OutsideClick;
export default function listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setIsOpen) {
    return () => {

        setListening(true);

            document.addEventListener(`click`, (evt) => {
                const cur = menuRef.current;
                const node = evt.target;
                 if(cur){
                if (cur.contains(node)) return;
                setIsOpen(false) ; }
            });

    };
}

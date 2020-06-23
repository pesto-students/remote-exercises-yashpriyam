import { useState, useEffect } from 'react';


function useKeyPress(subscribedKey) {
    console.log(subscribedKey);
    
    const [subscribedKeyPressed, setSubscribedKeyPressed] = useState(null)
    const [evt, setEvt] = useState(null)

    useEffect(() => {
        const evtHandle = (e) => {
            console.log('evtHamdle');
            
            setEvt(e)
            if (subscribedKey === e.key.toString() || e.key.includes(subscribedKey)) {
                setSubscribedKeyPressed(true);
            }
        }
        document.addEventListener("keydown", evtHandle);

        return document.removeEventListener("keydown", evtHandle);
    }, [subscribedKey]);

    console.log(subscribedKeyPressed);
    return subscribedKeyPressed;
}

export default useKeyPress;
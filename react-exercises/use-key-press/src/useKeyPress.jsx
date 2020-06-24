import { useEffect, useState } from 'react';

function useKeyPress(subscribedKey) {
    const [subscribedKeyPressed, setSubscribedKeyPressed] = useState(false)
    useEffect(() => {
        document.addEventListener("keydown", function(e){
            switch (true){
                case subscribedKey === e.key.toString():
                case e.key.includes(subscribedKey):
                    setSubscribedKeyPressed(true);
                    break;
                default:
                    return false;
            }  
        })
        return document.removeEventListener("keydown", () => {})
    }, [subscribedKey])
    return subscribedKeyPressed;
}

export default useKeyPress;
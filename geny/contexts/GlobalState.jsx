import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
function GlobalState(props){
    const [isShown, setIsShown] = useState(false);
    return(
        <GlobalContext.Provider value={{isShown,setIsShown}}>
            {props.children}
        </GlobalContext.Provider>
        )
}
export default GlobalState;
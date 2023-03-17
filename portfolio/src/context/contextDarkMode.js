
import { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = (props) => {
    const [triger, setTriger] = useState(false)

    const value = {
        triger,
        setTriger
    }
    return (
        <DarkModeContext.Provider value={value}>
            {props.children}
        </DarkModeContext.Provider>
    )
}
export const useDarkModeContext = () => useContext(DarkModeContext)

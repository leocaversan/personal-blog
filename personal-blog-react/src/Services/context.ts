import React, { createContext, useContext, useState } from 'react';

interface MyContextType {
    myState: string;
    setMyState: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function MyContextProvider({ children }: { children: React.ReactNode }) {
    const [myState, setMyState] = useState('');

    const contextValue: MyContextType = {
        myState,
        setMyState,
    };

    // return <MyContext.Provider value={ contextValue }>
    //     { children }
    //     < /MyContext.Provider>;
}

export function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
}

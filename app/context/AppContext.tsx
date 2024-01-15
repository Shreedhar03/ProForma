'use client'

import React, { ReactNode, createContext, useState } from 'react';

export const _AppContext = createContext({
    isOpened: false,
    toggleOpen: () => { },
});

export default function AppContext({ children }: { children: ReactNode }) {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpen = () => {
        setIsOpened(!isOpened);
    };
    return (
        <_AppContext.Provider value={{ isOpened, toggleOpen }}>
            {children}
        </_AppContext.Provider>
    )
}

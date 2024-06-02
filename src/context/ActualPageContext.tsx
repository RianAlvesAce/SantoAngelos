import React, { createContext, useState } from 'react';

interface ActualRouteContextType {
    actualPage: string;
    setActualPage: React.Dispatch<React.SetStateAction<string>>;
}

const ActualRouteContext = createContext<ActualRouteContextType>({
    actualPage: '/',
    setActualPage: () => {},
});

const ActualRouteProvider = ({ children } : any) => {
    const [actualPage, setActualPage] = useState<string>('/');

    return (
        <ActualRouteContext.Provider value={{ actualPage, setActualPage }}>
            {children}
        </ActualRouteContext.Provider>
    );
};

export { ActualRouteContext, ActualRouteProvider };

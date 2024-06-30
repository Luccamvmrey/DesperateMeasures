import React, {PropsWithChildren} from "react";

const MainContent: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className="container flex flex-col h-[calc(100vh-60px)] md:flex-row md:justify-around md:items-start">
            {children}
        </main>
    );
};

//container flex justify-around items-start

export default MainContent;
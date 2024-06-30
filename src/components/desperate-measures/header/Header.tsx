import React from "react";
import ThemeToggle from "./ThemeToggle.tsx";

const Header: React.FC = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur
             supports-[backdrop-filter]:bg-background/60"
        >
            <div
                className="container flex h-14 max-w-screen-2xl justify-between items-center"
            >
                <div>
                    <h2>Desperate Measures</h2>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
import React, { Children } from "react";

interface GridProps {
    goToNextPage?: () => void;
    goToPreviousPage?: () => void;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, goToPreviousPage, goToNextPage }) => (
    <div className="container mx-auto w-100">
        <div className="grid grid-cols-4 gap-3 mx-auto">
            {children}
        </div>
        <div className="flex justify-center mt-4 gap-5">
            {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
            {goToNextPage && <button onClick={goToNextPage}>Next</button>}

        </div>
    </div>
);
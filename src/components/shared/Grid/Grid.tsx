import React, { Children } from "react";

interface GridProps {
    goToNextPage?: () => void;
    goToPreviousPage?: () => void;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, goToPreviousPage, goToNextPage }) => (
    <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-3 mx-auto">
            {children}
        </div>
        <div className="flex justify-center mt-4 gap-5">
            <div>
                {goToPreviousPage && <button className="border bg-blue-500 rounded-md text-2xl text-white p-2" onClick={goToPreviousPage}>Previous Page</button>}
            </div>
            <div>
                {goToNextPage && <button className="border bg-blue-500 rounded-md text-2xl text-white p-2" onClick={goToNextPage}>Next Page</button>}
            </div>

        </div>
    </div>
);
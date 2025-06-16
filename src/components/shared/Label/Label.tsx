import React, { Children } from "react";

interface LabelProps {
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => (
    <div className="bg-white text-xl flex items-center justify-center mt-4 w-full">
        {children}
    </div>
);
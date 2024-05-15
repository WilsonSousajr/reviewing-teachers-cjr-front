import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
};

export default function Button ({ children }: ButtonProps) {
    return <button className="bg-lightblue text-2xl py-4 px-12 rounded-lg outline">{children}</button>;
};
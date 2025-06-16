import React from "react";
import { Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import { SearchButton } from "./shared/Button/SearchButton";

const NavigationBar: React.FC = () => (
    <nav className="mx-auto  bg-yellow-400 flex justify-between h-12 items-center shadow-lg">
        <div className="mx-auto flex justify-between items-center w-9/12 ">
            <Link to="/">
                <div className="flex">
                    <img src={pokeball} alt="Poke Logo" className="w-10 h-10" />
                    <h1 className="text-black hover:text-white content-center pl-2">Pokedex</h1>
                </div>
            </Link>
            <div className="flex gap-5 items-center">
                <Link className="text-black hover:text-white" to="/favorites">My Favorites</Link>
                <SearchButton />
            </div>
        </div>
    </nav>
);

export default NavigationBar;
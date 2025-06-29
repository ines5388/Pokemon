import React, { useMemo } from "react";
import { PokemonListItem } from "../interfaces/PokemonListItem";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { getMainPokemonType } from "../utils/getMainPokemonType";
import { Label } from "./shared/Label/Label";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { FavoriteButton } from "./shared/Button/FavoriteButton";
import { useNavigate } from "react-router";
import { TypeIcons } from "./shared/TypeIcons/TypeIcons";
import { useSearchStore } from "../store/useSearchStore";

interface PokemonCardProps {
    pokemon?: PokemonListItem;
    pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
    const closeModal = useSearchStore((state) => state.closeModal);
    const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData])
    const navigate = useNavigate();

    const onclick = () => {
        navigate(`/pokemon/${pokemonData?.name}`);
        closeModal(); 
    }
    return (
        <div className={`${mainType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}>
            <FavoriteButton pokemonId={pokemonData?.id ?? 0} />
            <TypeIcons types={pokemonData?.types ?? []} />
            <div className="flex flex-col items-center mx-auto" onClick={onclick}>
                <img className="mx-auto w-40 h-40" src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ""} />
                <Label>{pokemonData?.id ? `# ${Number(pokemonData?.id)}` : ""} {pokemonData?.name ? capitalizeFirstLetter(pokemonData?.name) : ""}</Label>
            </div>
        </div>
    );
};

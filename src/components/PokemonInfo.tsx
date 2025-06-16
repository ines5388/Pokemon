import React, {useMemo } from "react";
import { useParams } from "react-router";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { getMainPokemonType } from "../utils/getMainPokemonType";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { convertLbsToKg } from "../utils/convertLbsToKg";
import { convertInchesToCm } from "../utils/convertInchesToCm";
import { PokemonSprites } from "./PokemonSprites";
import { TypeIcons } from "./shared/TypeIcons/TypeIcons";

export const PokemonInfo = () => {
    const { pokemonName } = useParams();
    const { pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData])

    return (
        <>
            <h1 className="flex justify-center text-4xl mb-5 font-serif">Pokemon Information </h1>
            <div className="flex felx-row justify-between shadow-lg bg-gray-100 rounded-lg">
                <div className={`${mainType}-background w-72 rounded-l-lg items-center`}>
                    <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ""} className="mx-auto w-72 h-72" />
                </div>
                <div className="flex flex-col grow p-5 gap-3">
                    <div className="relative flex">
                        <h1 className="text-4xl underline mb-3">{capitalizeFirstLetter(pokemonData?.name ?? "")}</h1>
                        <TypeIcons types={pokemonData?.types ?? []} />
                    </div>
                    <span className="text-xl">{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
                    <span className="text-xl">{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} kg`}</span>
                    <PokemonSprites pokemonName={pokemonName} />
                </div>
            </div>
        </>
    )
}
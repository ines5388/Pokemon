import React from "react";
import { useGetPokemonList } from "../hooks/useGetPokemonList";
import { PokemonCard } from "./PokemonCard";
import { Grid } from "./shared/Grid/Grid";

const PokemonList: React.FC = () => {
    const { pokemonList, goToNextPage, goToPreviousPage, } = useGetPokemonList();
    return (
        <>
            <h1 className="flex justify-center text-4xl mb-5 font-serif"> All Pokemons </h1>
            <Grid goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}>
                {pokemonList?.map((pokemon) => <PokemonCard key={pokemon?.name} pokemon={pokemon} />)}
            </Grid>
        </>
    )
}

export default PokemonList;
import React from "react";
import { useParams } from "react-router";
import useGetPokemonListByType from "../hooks/useGetPokemonListByType";
import { Grid } from "./shared/Grid/Grid";
import { PokemonCard } from "./PokemonCard";

export const PokemonListByType = () => {
    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType(typeName ?? "");

    return (
        <>
            <h1 className="flex justify-center text-4xl mb-5 font-serif capitalize"> Pokemons Type: {typeName} </h1>
            <Grid>
                {pokemonList?.map((pokemon) => (
                    <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
                ))}
            </Grid>
        </>
    );
};
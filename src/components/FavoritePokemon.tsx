import React from "react";
import { useFavoriteStore } from "../store/useFavoriteStore"
import { PokemonCard } from "./PokemonCard";
import { Grid } from "./shared/Grid/Grid";

export const FavoritePokemon = () => {
    const favoriteIds = useFavoriteStore((state) => state.favorites);

    return (
        <>
            <h1 className="flex justify-center text-4xl mb-5 font-serif"> My Favorites Pokemons </h1>
            <Grid>
                {favoriteIds.map((favoriteId) => (
                    <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)} />
                ))}
            </Grid>
        </>
    );
};
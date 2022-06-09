import { View, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonFavoriteApi } from '../api/favorite'
import { getPokemonDetailApiForView } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'
export default function Favorites() {

  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi()

          const pokemonsArray = []
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailApiForView(id)

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }
          setPokemons(pokemonsArray)

        })()
      }
    }, [auth])
  )

  return !auth ?
    (
      <NoLogged>
      </NoLogged>
    ) : (
      <PokemonList pokemons={pokemons} fromFavorite={true} />
    )
}
import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailApiForView } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Icon from "react-native-vector-icons/FontAwesome5"
import Favorite from '../components/Pokemon/Favorite'
import useAuth from '../hooks/useAuth'


const Pokemon = (props) => {

    const { navigation, route: { params } } = props

    const { auth } = useAuth()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    auth ? <Favorite id={pokemon?.id} /> : null
                )

            },
            headerLeft: () => {

                return (
                    <Icon
                        name="arrow-left"
                        color="#fff"
                        size={20}
                        style={{ marginLeft: 0 }}
                        onPress={navigation.goBack}
                    />
                )
            }
        })
    }, [navigation, params, pokemon])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailApiForView(params.id)
                setPokemon(response)
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [params])
    if (!pokemon) return null
    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other['official-artwork'].front_default}
                type={pokemon.types[0].type.name}
            />
            <Type
                type={pokemon.types}
            />
            <Stats
                stats={pokemon.stats}
            />
        </ScrollView>
    )
}

export default Pokemon
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, loadPokemons, isNextUrl, fromFavorite = false }) {
    console.log(" fromFavorite ", fromFavorite);
    const loadMore = async () => {
        // console.log("cargando mas ...")
        await loadPokemons()
    }

    return (

        <FlatList
            data={pokemons}
            numColumns={2}
            showVerticalScrollIndicator={false}
            keyStractor={
                (pokemon) => String(pokemon.id)
            }
            renderItem={({ item }) => <PokemonCard pokemon={item} fromFavorite={fromFavorite} />}
            contentContainerStyle={styles.flatListContentContainer}
            //loader
            onEndReached={isNextUrl && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNextUrl && ( //render loader si hay next page
                    <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />
                )

            }
        />

    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 10 : 10,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    }
});

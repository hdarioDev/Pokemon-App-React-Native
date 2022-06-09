import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemon from '../utils/getColorByPokemon'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import { useNavigation } from '@react-navigation/native'

const PokemonCard = ({ pokemon, fromFavorite }) => {
    // const { pokemon } = props
    const navigation = useNavigation()

    const pokemonColor = getColorByPokemon(pokemon.type)
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }
    const widthCard = fromFavorite ? 140 : 100

    const cardStyles = {
        width: widthCard,
        height: widthCard,
        ...styles.card
    }

    const imgStyles = {
        width: widthCard,
        height: widthCard,
        ...styles.image
    }


    const goToPokemon = () => {
        navigation.navigate('Pokemon', { id: pokemon.id });

    }
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={cardStyles}>
                <View style={bgStyles}>
                    <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                    <Text style={styles.namePokemon}>{capitalizeFirstLetter(pokemon.name)}</Text>
                    <Image source={{ uri: pokemon.image }} style={imgStyles} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default PokemonCard

const styles = StyleSheet.create({
    card: {
        flex: 1,

        // backgroundColor: "#a4d1b3",

        margin: 8,
        borderRadius: 20,
        marginBottom: 16

    },
    number: {
        position: 'absolute',
        right: 10,
        // left: 10,
        color: "#fff",
        fontSize: 14,
        marginTop: 8
    },
    namePokemon: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,

    },
    image: {
        position: 'absolute',
        marginTop: 26,

        alignSelf: 'center'
    },
    bgStyles: {
        flex: 1,

        borderRadius: 15,
        padding: 10
    }
})  
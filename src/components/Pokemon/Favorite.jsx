import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5' //lineal
// import FontAwesome from 'react-native-vector-icons/FontAwesome' //rellenado
import {
    getPokemonFavoriteApi,
    addPokemonFavoriteApi,
    isPokemonFavoriteApi,
    removePokemonFavoriteApi
} from '../../api/favorite'

export default function Favorite(props) {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(false)
    const [reloadCheck, setReloadcheck] = useState(false)
    useEffect(() => {
        (
            async () => {
                try {
                    response = await isPokemonFavoriteApi(id)
                    setIsFavorite(response)
                } catch (error) {
                    setIsFavorite(false)
                }

            }
        )()
    }, [id, reloadCheck])

    const onReloadFavorites = () => {
        setReloadcheck((prev) => !prev)
    }

    const handleAddFav = async () => {

        await addPokemonFavoriteApi(id)
        onReloadFavorites()

    }
    const removeFavorite = async () => {

        try {
            await removePokemonFavoriteApi(id)
            onReloadFavorites()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Icon
            style={styles.icon}
            name="heart"
            solid={isFavorite}
            color="#fff"
            size={20}
            onPress={isFavorite ? removeFavorite : handleAddFav}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        margin: 20
    }
})
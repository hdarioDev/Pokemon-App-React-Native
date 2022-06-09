import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITE_STORAGE } from '../utils/constants'

export async function getPokemonFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || '[]')
    } catch (error) {
        throw error
    }
}

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export async function isPokemonFavoriteApi(id) {
    try {
        const response = await getPokemonFavoriteApi()
        return response.includes(id)
    } catch (error) {
        throw error
    }
}

export async function removePokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi()
        const newFavorites = favorites.filter(fav => fav != id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }

}
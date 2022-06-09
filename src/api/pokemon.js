import { API_HOST } from "../utils/constants"

export async function getPokemonsApi(nextUrl) {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const response = await fetch(nextUrl || url)//si hay nextUrl
        const result = await response.json()
        return result
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonDetailApiForView(id) {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}
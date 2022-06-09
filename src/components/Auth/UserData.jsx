import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoriteApi } from '../../api/favorite'

export default function UserData() {
    const { auth, logout } = useAuth()
    const [totalFavs, setTotalFavs] = useState(0)
    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await getPokemonFavoriteApi()
                    setTotalFavs(response.length)
                } catch (error) {
                    setTotalFavs(0)
                }
            })()
        }, [])
    )

    return (
        <View style={styles.dataContainer}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
            </View>
            <View style={styles.information}>
                <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastname}`} />
                <ItemMenu title="Usuario" text={`${auth.username}`} />
                <ItemMenu title="Email" text={`${auth.email}`} />
                <ItemMenu title="Total Favoritos" text={`${totalFavs} Pokemons`} />
            </View>


            <TouchableOpacity onPress={logout} style={styles.btnLogout}>
                <Text style={styles.txtBtnLogout}  >Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

function ItemMenu(props) {
    const { title, text } = props
    return (

        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}:</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: '#e0e0e0',
        paddingBottom: 45,
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        padding: 20
    },
    titleBlock: {
        marginBottom: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        color: "#32c8f1",

    },
    dataContent: {
        marginBottom: 20,
    },
    itemMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#CFCFCF",
    },
    itemMenuTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120,
        color: "#2a84da",
    },
    btnLogout: {
        paddingTop: 50,
    },
    btnLogout: {
        marginTop: 20,
        backgroundColor: 'red',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 12,
        color: 'white'
    },
    txtBtnLogout: {
        color: 'white',
        fontSize: 16
    }
})
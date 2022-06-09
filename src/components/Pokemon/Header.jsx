import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import getColorByPokemon from '../../utils/getColorByPokemon'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'

export default function Header(props) {
    const { name, order, image, type } = props
    const color = getColorByPokemon(type)

    const bgStyle = [{ backgroundColor: color, ...styles.bg }]

    return (
        <View>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <Text style={styles.name}>{capitalizeFirstLetter(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </View>
    )
} const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]

    },
    content: {
        marginHorizontal: 20,
        marginTop: 70,
        marginTop: Platform.OS === 'android' ? 70 : 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain" //fix android
    }

})
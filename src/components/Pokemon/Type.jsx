import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import getColorByPokemon from '../../utils/getColorByPokemon'


export default function Type({ type }) {

    return (
        <View style={styles.content}>
            {type.map((person, index) => {
                return (
                    <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemon(person.type.name) }}>
                        <Text style={styles.text}>{capitalizeFirstLetter(person.type.name)}</Text>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    text: {
        color: "#fff"
    }
})
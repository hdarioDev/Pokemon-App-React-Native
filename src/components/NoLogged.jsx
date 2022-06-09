import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
    const navigation = useNavigation()
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Inicia sesión para ver tus favoritos</Text>
            <Icon style={styles.image} name="images" color={'orange'} size={80} />
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Account")} >
                <Text style={styles.txtButtonLogin}  >Ir al Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    image: {
        textAlign: 'center',
        margin: 18
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        color: '#7d7d7d'
    },
    buttonLogin: {
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
    txtButtonLogin: {
        color: 'white',
        fontSize: 16
    }
})
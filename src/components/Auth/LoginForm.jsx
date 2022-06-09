import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetail } from '../../utils/userDB'
import unseAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const { login } = unseAuth()
    const [error, serError] = useState("")
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validation()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            serError("")
            const { username, password } = formValue
            if (username !== user.username || password !== user.password) {
                serError("Credenciales incorrectas")
            } else {
                login(userDetail)

            }
        }
    })
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="usuario"
                placeholderTextColor={'#686a68'}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />
            <Text style={styles.error}>{formik.errors.username}</Text>
            <TextInput
                placeholder='contraseña'
                placeholderTextColor={'#686a68'}
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Text style={styles.error}>{formik.errors.password}</Text>
            <TouchableOpacity style={styles.buttonLogin} onPress={formik.handleSubmit} >
                <Text style={styles.txtButtonLogin}  >Ingresar</Text>
            </TouchableOpacity>


            <Text style={styles.error}>{error}</Text>

        </View>
    )
}

function initialValues() {
    return {
        username: 'hdariodev',
        password: '123456'
    }
}

function validation() {
    return {
        username: Yup.string().required("El usuairo es requerido"),
        password: Yup.string().required("La contraseña es requerido")

    }
}

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#e0e0e0',
        paddingBottom: 45,
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
        color: "#32c8f1",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        marginLeft: 12,
        paddingLeft: 10,
        fontSize: 12,
        color: 'red'
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
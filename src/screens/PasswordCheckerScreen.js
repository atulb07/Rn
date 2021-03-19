import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const PasswordChecker = () => {

    const [password, UpdatePassword] = useState("")

    return (
        <View>
            <Text style={Style.text}>
                Password Checker
            </Text>
            <TextInput
                style={Style.input}
                placeholder="Enter your password here"
                value={password}
                onChangeText={(newText) => UpdatePassword(newText)}
            />
            {
                password.length > 5 ?
                    <Text style={Style.text}>
                        Password Strong
                    </Text>
                    :
                    <Text style={Style.text}>
                        Password Weak
                    </Text>
            }
        </View>
    )
}

const Style = StyleSheet.create({
    text: {
        alignSelf: "center",
        margin: 10,
        fontSize: 20
    },

    input: {
        borderWidth: 1,
        padding: 5
    }
})

export default PasswordChecker;
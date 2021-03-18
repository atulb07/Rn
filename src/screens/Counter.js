import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {

    const [Counter, SetCounter] = useState(0);

    return (
        <View style={Style.view}>
            <Button
                title="Increase"
                onPress={() => SetCounter(Counter + 1)}
            />
            <Text style={Style.text}>
                Counter {Counter}
            </Text>
            <Button
                title="Decrease"
                onPress={() => SetCounter(Counter - 1)}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    },
    text: {
        margin: "10%"
    }
})

export default CounterScreen;
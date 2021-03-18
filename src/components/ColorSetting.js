import React from 'react';
import { Button, ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

const ColorSetting = (props) => {
    return (
        <View style={{ backgroundColor: props.color }}>
            <Button
                title="Increase"
                onPress={() => { props.onButtonPress(+1) }}
            />
            <Text style={Style.text}>
                {props.color}
            </Text>
            <Button
                title="Decrease"
                onPress={() => { props.onButtonPress(-1) }}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    text: {
        alignSelf: "center"
    }
})

export default ColorSetting;
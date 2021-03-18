import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColorSetting from "../components/ColorSetting"

const ColorGeneratorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View style={{ ...Style.view, backgroundColor: `rgb(${red},${green},${blue})` }}>
            <Text>
                rgb({red},{green},{blue})
            </Text>
            <ColorSetting color="red" onButtonPress={(val) => (red + val > 255 || red + val < 0) ? null : setRed(red + val * 5)} />
            <ColorSetting color="green" onButtonPress={(val) => (green + val > 255 || green + val < 0) ? null : setGreen(green + val * 5)} />
            <ColorSetting color="blue" onButtonPress={(val) => (blue + val > 255 || blue + val < 0) ? null : setBlue(blue + val * 5)} />
        </View >
    );

}

const Style = StyleSheet.create({
    view: {
        height: '100%',
        alignItems: "center",
        justifyContent: "space-around"
    }
})

export default ColorGeneratorScreen;
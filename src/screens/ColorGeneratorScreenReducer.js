import React, { useReducer } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColorSetting from "../components/ColorSetting"

const reducer = (state, action) => {

    switch (action.type) {
        case "red":
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ?
                state : { ...state, red: state.red + action.payload }
        case "green":
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ?
                state : { ...state, green: state.green + action.payload }
        case "blue":
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ?
                state : { ...state, blue: state.blue + action.payload }
        default: return state
    }

}


const ColorGeneratorScreenReducer = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = { ...state }
    return (
        <View style={{ ...Style.view, backgroundColor: `rgb(${red},${green},${blue})` }}>
            <Text style={Style.text}>
                RGB({red},{green},{blue})
            </Text>
            <ColorSetting color="red" onButtonPress={(val) => dispatch({ type: "red", payload: val * 5 })} />
            <ColorSetting color="green" onButtonPress={(val) => dispatch({ type: "green", payload: val * 5 })} />
            <ColorSetting color="blue" onButtonPress={(val) => dispatch({ type: "blue", payload: val * 5 })} />
        </View >
    );

}

const Style = StyleSheet.create({

    text: {
        color: "white",
        fontSize: 30
    },

    view: {
        height: '100%',
        alignItems: "center",
        justifyContent: "space-around"
    }
})

export default ColorGeneratorScreenReducer;
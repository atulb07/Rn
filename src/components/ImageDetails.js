import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ImageDetails = (props) => {

    return (
        <View style={Style.view}>
            <Image source={props.image} height="20" width="20" style={Style.image} />
            <Text style={Style.text}>
                Name: {props.name}, Age: {props.age}
            </Text>
        </View>
    );

}

const Style = StyleSheet.create({

    view: {
        alignItems: "center",
        marginBottom: 30
    },

    image: {
        height: 200,
        width: 160
    },

    text: {
        fontSize: 30
    }
})

export default ImageDetails;

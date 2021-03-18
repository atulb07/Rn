import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const textString = <Text style={Styles.subText}>This is jsx string</Text>

    return (
        <View>
            <Text style={Styles.textStyle}>
                This is component screen
            </Text>
            { textString}
        </View>
    );
}

const Styles = StyleSheet.create({

    textStyle: {
        fontSize: 30,
        alignSelf: "center"
    },

    subText: {
        alignSelf: "center"
    }

})

export default ComponentScreen;
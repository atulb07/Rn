import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';

const ColourBlocks = () => {

    const [colorList, insertColour] = useState([]);

    return (
        <View style={Styles.view}>
            <Button
                title="Add Blocks"
                onPress={() => insertColour([...colorList, randomColor()])}
            />
            <FlatList
                data={colorList}
                keyExtractor={(element) => element}
                renderItem={(element) => (
                    <View
                        style={{ backgroundColor: element.item, height: 100, width: 100 }}>
                    </View>
                )}
            />
        </View>
    )
}

const randomColor = () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`

const Styles = StyleSheet.create({
    view: {
        marginTop: 20
    }
})


export default ColourBlocks;
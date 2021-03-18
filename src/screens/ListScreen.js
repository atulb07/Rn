import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {

    const dataList = [
        {
            name: "atul",
            age: 10,
            key: "1"
        },
        {
            name: "manishi",
            age: 20,
            key: "2"
        },
        {
            name: "rohan",
            age: 30,
            key: "3"
        }
    ]

    return (
        <FlatList
            data={dataList}
            renderItem={(element) => <Text style={Style.textStyle}> Name: {element.item.name} Age: {element.item.age} </Text>}
        />
    );
}

const Style = StyleSheet.create({

    textStyle: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20
    }

})

export default ListScreen;
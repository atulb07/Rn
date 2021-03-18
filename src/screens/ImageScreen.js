import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageComponent from "../components/ImageDetails"

const ImageScreen = () => {

    const dataList = [
        {
            name: "Rohan",
            age: 20,
            image: require("../../assets/pic1.jpg"),
            key: "1"
        },
        {
            name: "Manishi",
            age: 22,
            image: require("../../assets/pic2.jpg"),
            key: "2"
        },
        {
            name: "Atul",
            age: 23,
            image: require("../../assets/pic3.jpg"),
            key: "3"
        }

    ]

    return (
        <FlatList
            data={dataList}
            renderItem={(element) => { return <ImageComponent {...element.item} /> }}
        />
    );
}

const Styles = StyleSheet.create({})

export default ImageScreen;
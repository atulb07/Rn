import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (

    <View>

      <Text style={Styles.text}>HomeScreen</Text>

      <Button
        style={Styles.button}
        title="Go to Component Screen"
        onPress={() => props.navigation.navigate('Component')}
      />

      <Button
        style={Styles.button}
        title="Go to List Screen"
        onPress={() => { props.navigation.navigate('List') }}
      />

      <Button
        style={Styles.button}
        title="Go to Image Screen"
        onPress={() => { props.navigation.navigate('Image') }}
      />

      <Button
        style={Styles.button}
        title="Go to Counter Screen"
        onPress={() => { props.navigation.navigate('Counter') }}
      />

      <Button
        style={Styles.button}
        title="Go to Colour Blocks Screen"
        onPress={() => { props.navigation.navigate('ColourBlocks') }}
      />

      <Button
        style={Styles.button}
        title="Go to Colour Generator Screen"
        onPress={() => { props.navigation.navigate('ColourGenerator') }}
      />

      <Button
        style={Styles.button}
        title="Go to Colour Generator with Reducer"
        onPress={() => { props.navigation.navigate('ColourGeneratorReducer') }}
      />


      <Button
        style={Styles.button}
        title="Go to Passsword Checker Screen"
        onPress={() => { props.navigation.navigate('PasswordChecker') }}
      />

    </View >

  );
};

const Styles = StyleSheet.create({

  text: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10
  },

  button: {
    marginTop: 20,
  }

});

export default HomeScreen;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/Counter';
import ColourBlocksScreen from './src/screens/ColorBlocksScreen';
import ColorGeneratorScreen from './src/screens/ColorGeneratorScreen';
import ColorGeneratorScreenReducer from './src/screens/ColorGeneratorScreenReducer'
import PasswordCheckerScreen from './src/screens/PasswordCheckerScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    ColourBlocks: ColourBlocksScreen,
    ColourGenerator: ColorGeneratorScreen,
    ColourGeneratorReducer: ColorGeneratorScreenReducer,
    PasswordChecker: PasswordCheckerScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);

//Counter
//Colour Blocks
//Colour genererater

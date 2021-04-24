import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DinnerScreen from './screens/DinnerScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen:{screen: HomeScreen},
  DinnerScreen:{screen: DinnerScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

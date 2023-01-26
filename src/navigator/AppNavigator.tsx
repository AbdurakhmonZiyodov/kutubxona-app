import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import AssetScreen from '../screens/AssetScreen';
import {Routes} from '../constants';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.home}>
        <Stack.Screen name={Routes.home} component={WelcomeScreen} />
        <Stack.Screen name={Routes.assetItem} component={AssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

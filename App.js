import React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Home';
import IssLocationScreen from './screens/ISSlocation';
import MeteorScreen from './screens/Meteors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
<Stack.Screen name='Home' component={Homescreen}/>
<Stack.Screen name='IssLocation' component={IssLocationScreen}/>
<Stack.Screen name='Meteor' component={MeteorScreen}/>
</Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

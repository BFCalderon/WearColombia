import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homesc from './components/home';
import Inicio from './components/iniciosesion';

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <Homesc navigation={navigation} />
  );
}

function InicioSe({ navigation }) {
  return (
    <Inicio navigation={navigation} />
  );
}


function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homesc" headerMode="none">
      {/* <Text>Prueba</Text>  */}
        <Stack.Screen name="Homesc" component={Home} /> 
        <Stack.Screen name="Inicio" component={InicioSe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


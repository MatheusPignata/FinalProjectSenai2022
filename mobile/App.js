import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import Menu from './pages/menu';
import Usuario from './pages/usuario';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Usuario" component={Usuario} options={{ title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
<Stack.Screen name="Login" component={Login} options={{ title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
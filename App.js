import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import Menu from './pages/menu';
import UpdateUsuario from './pages/updateUsuario';
import CreateUsuario from './pages/cadastroUsuario';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Menu" component={Menu} options={{ headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="CreateUsuario" component={CreateUsuario} options={{ headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="Login" component={Login} options={{ headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="UpdateUsuario" component={UpdateUsuario} options={{ headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
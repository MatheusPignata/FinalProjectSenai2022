import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import Menu from './pages/menu';
import UpdateUsuario from './pages/updateUsuario';
import CreateUsuario from './pages/cadastroUsuario';
import Chamado from './pages/chamado';
import AtualizarChamado from './pages/atualizarChamado';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="CreateUsuario" component={CreateUsuario} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="UpdateUsuario" component={UpdateUsuario} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C', borderBottomWidth: 0 } }} />
        <Stack.Screen name="Chamado" component={Chamado} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C' } }} />
        <Stack.Screen name="AtualizarChamado" component={AtualizarChamado} options={{ headerShown: false, headerTintColor: '#8300E9', title: '', headerStyle: { backgroundColor: '#37333C' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
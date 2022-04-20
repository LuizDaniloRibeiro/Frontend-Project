import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Administrador from './src/pages/dashboard-adm/index';
import User from './src/pages/dashboard-user/index';
import Login from './src/pages/login/index';
import Register from './src/pages/register/index';
import Teste from './src/pages/dashboard-adm-list/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Teste" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
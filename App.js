import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Admin from './src/pages/dashboard-adm/index';
import User from './src/pages/dashboard-user/index';
import Login from './src/pages/login/index';
import Register from './src/pages/register/index';
import Editar from './src/pages/dashboard-user-alter/index';
import EditarAdm from './src/pages/dashboard-adm-edit/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Admin'>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#000'
          }} 
        />
        <Stack.Screen 
          name="Cadastrar" 
          component={Register} 
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={User}
          options={{
            headerStyle: {
              backgroundColor: '#F82352',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen 
          name="ADM" 
          component={Admin}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen 
          name="Editar" 
          component={Editar}
          options={{
            headerStyle: {
              backgroundColor: '#F82352',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen 
          name="EditarAdm" 
          component={EditarAdm}
          options={{
            headerStyle: {
              backgroundColor: '#F3613A',
            },
            headerTintColor: '#FFF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
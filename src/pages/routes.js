import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo, Feather } from '@expo/vector-icons';

import Login from './login/index';
import Register from './register/index';
import Home from './dashboard-adm/index';
import Couser from './register-course/index';

import Editar from './cursoAlter/index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                    paddingBottom:5,
                    paddingTop:5,
                },
                tabBarActiveTintColor: '#F82352',
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="Cursos" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name='video' size={size} color={color}/>
                    ),
                    headerStyle: {
                        backgroundColor: '#000',
                      },
                    headerTintColor: '#fff',
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Cadastrar Curso" 
                component={Couser}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name='save' size={size} color={color}/>
                    ),
                    headerStyle: {
                        backgroundColor: '#000',
                      },
                      headerTintColor: '#fff'
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes(){

    return(
            <Stack.Navigator >
                <Stack.Screen 
                    name='Login' 
                    component={Login}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerShown: false

                    }}
                    
                />
                <Stack.Screen 
                    name='Register' 
                    component={Register}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',

                    }}
                    
                />
                <Stack.Screen 
                    name='Mind Consulting' 
                    component={Tabs}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerShown: false
                    }}
                    
                />
                <Stack.Screen 
                    name='Editar' 
                    component={Editar}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000'
                        },
                        headerTintColor: '#FFF'
                    }}
                />
            </Stack.Navigator>
    )
    
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Routes from './src/pages/routes'


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}




// import Login from './src/pages/login/index';
// import Adimin from './src/pages/dashboard-adm/index';
// import Register from './src/pages/register/index';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return(
//     <Tab.Navigator
//       tabBarBo
//       tabBarOptions={{
//         labelStyle: {
//           fontSize: 13,
//         },
//         style: {
//           backgroundColor: '#1919'
//         }
//       }}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = focused = 'home-outline'
//           } else if (route.name === 'Cursos') {
//             iconName = focused = 'school-outline';
//           }
//           return <Ionicons name={iconName} size={30} color={color} />;
//         },
//         tabBarActiveTintColor: '#F82352',
//         tabBarInactiveTintColor: '#fff',
//       })}
//     >
//       <Tab.Screen name="Home" component={Adimin} />
//       <Tab.Screen name="Cursos" component={Register}/>
//     </Tab.Navigator>
//   )
// }

import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Cadastro from '../screens/cadastro/Cadastro';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name = 'home'
          component={Home}
        />
  
      <Tab.Screen
        name = 'login'
        component={Login}
      />
  
      <Tab.Screen
          name = 'cadastro'
          component={Cadastro}
      />
  
      </Tab.Navigator>
    );
  };
  
  export default TabRoutes;
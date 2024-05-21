import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Cadastro from '../screens/cadastro/Cadastro';
import TelaInicial from '../screens/telainicial/TelaInicial';
import ConhecaNos from '../screens/conhecanos/conhecaNos';

const Tab = createBottomTabNavigator();

const TabRoutes = ({setUser}) => {
    console.log('Executando')
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name = 'home'
          component={Home}
          options={{ tabBarStyle:{display:'none'}}}
        />
  
      <Tab.Screen
        name = 'login'
        children={() => <Login setUser={setUser} />}
        options={{ tabBarStyle:{display:'none'}}}
      />
  
      <Tab.Screen
          name = 'cadastro'
          component={Cadastro}
          options={{ tabBarStyle:{display:'none'}}}
      />
  
      <Tab.Screen
          name = 'TelaInicial'
          component={TelaInicial}
          options={{ tabBarStyle:{display:'none'}}}

      />
      <Tab.Screen
          name = 'ConhecaNos'
          component={ConhecaNos}
          options={{ tabBarStyle:{display:'none'}}}

      />
      </Tab.Navigator>
    );
  };
  
  export default TabRoutes;
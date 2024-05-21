import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';

const Routes = ({setUser}) => {
    console.log('Executanto Routes')
    return (
        <NavigationContainer>
            <TabRoutes setUser={setUser}/>
        </NavigationContainer>
    );
};

export default Routes;
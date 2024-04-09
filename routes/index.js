import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tab.routes';

const Routes = () => {
    console.log('Executanto Routes')
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
};

export default Routes;
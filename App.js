import React from 'react';
import { useState } from 'react';
import Routes from './routes';
import TelaInicial from './screens/telainicial/TelaInicial';


const App = () => {
    console.log('Executanto App')
    const [user, setUser] = useState(null);
    return (
        !user ? <Routes setUser={setUser} /> : <TelaInicial />
    )
    
};

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Order from './screens/Order';
import Purchases from './screens/Purchases';
import { NativeBaseProvider } from 'native-base';

const queryClient = new QueryClient();
const stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="Order" component={Order} />
        <stack.Screen name="Purchases" component={Purchases} />
      </stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
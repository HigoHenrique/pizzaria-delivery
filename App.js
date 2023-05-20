import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';

const queryClient = new QueryClient();
const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Signup" component={Signup} />
      </stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
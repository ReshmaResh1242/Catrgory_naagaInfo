
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryListing from './Screens/CategoryListing';
import CategoryDetails from './Screens/CategoryDetails';
import CategoryCreate from './Screens/CategoryCreate';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoryListing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CategoryListing" component={CategoryListing} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="CategoryCreate" component={CategoryCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
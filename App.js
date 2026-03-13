import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfluencerList from './src/screens/InfluencerList';
import InfluencerDetail from './src/screens/InfluencerDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InfluencerList">
        <Stack.Screen 
          name="InfluencerList" 
          component={InfluencerList} 
          options={{ title: 'Magic Influencers' }} 
        />
        <Stack.Screen 
          name="InfluencerDetail" 
          component={InfluencerDetail} 
          options={{ title: 'Profile Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
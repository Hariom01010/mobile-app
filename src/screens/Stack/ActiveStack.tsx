import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen2 from '../ProfileScreen/ProfileScreen2';
import ActiveTaskDetail from '../ProfileScreen/DetailScreen/ActiveTaskDetail';
import ActiveTaskDetail2 from '../ProfileScreen/DetailScreen/ActiveTaskDetail2';
import ExtensionRequest from '../ProfileScreen/DetailScreen/ExtensionRequest';

const Stack = createStackNavigator();
function ActiveTaskScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen2} />
      <Stack.Screen name="ActiveTaskDetail" component={ActiveTaskDetail} />
      {/* <Stack.Screen name="ActiveTaskDetail2" component={ActiveTaskDetail2} /> */}
      <Stack.Screen name="ExtensionRequest" component={ExtensionRequest} />
    </Stack.Navigator>
  );
}

export default ActiveTaskScreenStack;

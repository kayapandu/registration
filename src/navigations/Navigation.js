import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../screens/SignUp/SignUp.screen';
import OTPVerification from '../screens/OTPVerification/OTPVerification.screen';
import Status from '../screens/Status/Status';

const Stack = createNativeStackNavigator();

export default function Navigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShadowVisible: false, headerTitle: '', }} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShadowVisible: false, headerTitle: '' }} />
      <Stack.Screen
        name="Status"
        component={Status}
        options={{ headerShadowVisible: false, headerTitle: '', headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}


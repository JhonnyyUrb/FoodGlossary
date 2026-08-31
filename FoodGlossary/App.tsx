import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import FruitsScreen from './src/screens/FruitsScreen';
import ProteinScreen from './src/screens/ProteinScreen';
import FiberScreen from './src/screens/FiberScreen';

export type RootStackParamList = {
  Home: undefined;
  Fruits: undefined;
  Protein: undefined;
  Fiber: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Food Glossary',
            headerStyle: {
              backgroundColor: '#334155',
            },
          }}
        />

        <Stack.Screen
          name="Fruits"
          component={FruitsScreen}
          options={{
            title: 'Fruits',
            headerStyle: {
              backgroundColor: '#E85D75',
            },
          }}
        />

        <Stack.Screen
          name="Protein"
          component={ProteinScreen}
          options={{
            title: 'Protein',
            headerStyle: {
              backgroundColor: '#C96A3D',
            },
          }}
        />

        <Stack.Screen
          name="Fiber"
          component={FiberScreen}
          options={{
            title: 'Fiber',
            headerStyle: {
              backgroundColor: '#5B8C5A',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
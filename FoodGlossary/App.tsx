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
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Food Glossary' }}
        />

        <Stack.Screen
          name="Fruits"
          component={FruitsScreen}
          options={{ title: 'Fruits' }}
        />

        <Stack.Screen
          name="Protein"
          component={ProteinScreen}
          options={{ title: 'Protein' }}
        />

        <Stack.Screen
          name="Fiber"
          component={FiberScreen}
          options={{ title: 'Fiber' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
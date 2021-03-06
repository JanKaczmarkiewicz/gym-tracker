import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "./components/screens/MainView/MainView";
import Workout from "./components/screens/Workout/Workout";
import { TrackerProvider } from "./providers/Tracker";

export type RootStackParamList = {
  Home: undefined;
  Workout: { workoutIndex: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <TrackerProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={MainView} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  </TrackerProvider>
);

export default App;

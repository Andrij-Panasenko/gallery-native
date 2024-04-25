import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import ImageFullScreen from "../screens/ImageFullScreen";

const Navigator = () => {

    const Stack = createStackNavigator();
    
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen name="Gallery" component={MainComponent} />
          <Stack.Screen name="Full image" component={ImageFullScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;
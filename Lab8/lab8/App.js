import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import configureStore from "./redux/store/store";
import UserList from "./screens/UserList";

const Stack = createNativeStackNavigator();
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Users" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tab/tab.navigator";
import { MainParamList, Screen } from "./types";
import { DetailScreen }  from "../screens/detail/detail.screen";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../values/color";
import { styles } from "./root.stack.styles";

const Stack = createNativeStackNavigator<MainParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screen.TabNavigator}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screen.Detail}
          component={DetailScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity
                onPress={navigation.goBack}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color={COLORS.white} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: COLORS.blue.dark,
            },
            headerTitleStyle: {
              color: COLORS.white,
            },
            title: "",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
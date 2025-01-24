import * as React from "react";
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import TabNavigator from "./tab/tab.navigator";
import { MainParamList, Screen } from "./types";
import { DetailScreen }  from "../screens/detail/detail.screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../values/color";

const Stack = createNativeStackNavigator<MainParamList>();

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.blue.dark,
    },
};

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: COLORS.blue.dark,
    },
    headerTitleStyle: {
        color: COLORS.white,
    },
    headerTintColor: COLORS.white,
    title:"DetailPage",
};

const RootStack = () => {
    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator screenOptions={defaultScreenOptions}>
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
                                style={{ marginLeft: 16 }}
                                accessibilityLabel="Go back"
                            >
                                <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                            </TouchableOpacity>
                        ),
                        title: "",
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
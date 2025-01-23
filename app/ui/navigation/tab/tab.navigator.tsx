import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParams, Screen } from "../types";
import { HomeScreen } from "../../screens/home/home.screen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "../../screens/favorites/favorites.screen";
import { styles, tabBarColors } from "./tab.styles";

const Tab = createBottomTabNavigator<TabParams>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: true,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIconStyle: styles.tabBarIcon,
          tabBarIcon: ({ focused }) => {
            const iconName = () => {
              switch (route.name) {
                case Screen.Home:
                  return focused ? "home" : "home-outline";
                case Screen.Favorites:
                  return focused ? "heart" : "heart-outline";
              }
            };

            return (
              <Ionicons
                name={iconName()}
                size={24}
                color={focused ? tabBarColors.active : tabBarColors.inactive}
              />
            );
          },
        };
      }}
    >
      <Tab.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={{
          title: "Leedel",
        }}
      />
      <Tab.Screen
        name={Screen.Favorites}
        component={FavoritesScreen}
        options={{
          title: "Favorites",
        }}
      />
    </Tab.Navigator>
  );
}
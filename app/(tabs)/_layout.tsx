import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Image } from "expo-image";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "lightgray",
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? "black" : "dimgray",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              {focused ? "Home" : "Home"}
            </Text>
          );
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/svgs/home.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: "Earn",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/svgs/bar.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="security"
        options={{
          title: "Security",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/svgs/shield.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/svgs/setting.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

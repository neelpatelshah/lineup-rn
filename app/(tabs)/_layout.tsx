import { Link, Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: true,
        headerTitle: "lineup",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "TiltWarp",
          fontSize: 36,
          marginBottom: -4, // what the fuck???
        },
        headerTintColor: Colors.text,
        headerStyle: {
          backgroundColor: Colors.background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <IconSymbol
            name="bell"
            size={22}
            color={Colors.secondaryText}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <Link href={{ pathname: "../search" }} asChild>
            <TouchableOpacity>
              <IconSymbol
                name="search"
                size={22}
                color={Colors.secondaryText}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          </Link>
        ),
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 1,
          borderTopColor: Colors.darkAlt,
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="globe" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="list-unordered" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

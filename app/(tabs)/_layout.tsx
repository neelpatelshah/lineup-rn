import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

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
        },
        headerTintColor: Colors.text,
        headerStyle: {
          backgroundColor: Colors.background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <IconSymbol
            name="bell.fill"
            size={22}
            color={Colors.secondaryText}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <IconSymbol
            name="magnifyingglass"
            size={22}
            color={Colors.secondaryText}
            style={{ marginRight: 20 }}
          />
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
            <IconSymbol size={28} name="globe.americas.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.dash" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="book.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

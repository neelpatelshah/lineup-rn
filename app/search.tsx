import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";

const searchData = [
  { id: "1", type: "artist", name: "Tame Impala" },
  { id: "2", type: "venue", name: "The Forum" },
  { id: "3", type: "user", name: "neel" },
  { id: "4", type: "artist", name: "Flume" },
  { id: "5", type: "venue", name: "Red Rocks" },
];

export default function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for artists, venues, users..."
        placeholderTextColor="#999"
      />
      <FlatList
        data={searchData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            <ThemedText style={styles.resultType}>{item.type}</ThemedText>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: Colors.background,
    color: Colors.text,
    padding: 15,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.tint,
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tint,
  },
  resultType: {
    color: "#999",
    textTransform: "capitalize",
  },
});

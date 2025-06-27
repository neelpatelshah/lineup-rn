import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function CreateEntryScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create Entry</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Artist"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Venue"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Score (0-100)"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.reviewInput]}
        placeholder="Review"
        placeholderTextColor="#999"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <ThemedText style={styles.buttonText}>Submit</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: Colors.background,
    color: Colors.text,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.tint,
  },
  reviewInput: {
    height: 100,
  },
  button: {
    backgroundColor: Colors.tint,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

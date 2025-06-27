import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const eventData = {
  "1": {
    artist: "Tame Impala",
    venue: "The Forum",
    date: "2025-05-01T20:00:00Z",
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    attendees: [
      {
        username: "Alice",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      },
      {
        username: "Bob",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
      },
      {
        username: "neel",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    ],
  },
};

export default function EventScreen() {
  const { id } = useLocalSearchParams();
  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Event not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <ThemedText type="title">{event.artist}</ThemedText>
        <ThemedText type="subtitle">{event.venue}</ThemedText>
        <ThemedText>{new Date(event.date).toLocaleDateString()}</ThemedText>
      </View>
      <ThemedText type="subtitle" style={styles.attendeesTitle}>
        Attendees
      </ThemedText>
      <FlatList
        data={event.attendees}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <View style={styles.attendeeItem}>
            <Image
              source={{ uri: item.profilePicUrl }}
              style={styles.attendeePic}
            />
            <ThemedText>{item.username}</ThemedText>
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
  image: {
    width: "100%",
    height: 250,
  },
  infoContainer: {
    padding: 20,
  },
  attendeesTitle: {
    paddingHorizontal: 20,
  },
  attendeeItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tint,
  },
  attendeePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
});

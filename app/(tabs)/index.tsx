import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import FriendFeedItem from "@/components/HomeFeedItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

const imageUrl =
  "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200";

const carouselItems = [
  { id: "1", text: "Artist 1", subtext: "Venue 1", image: imageUrl },
  { id: "2", text: "Artist 2", subtext: "Venue 2", image: imageUrl },
  { id: "3", text: "Artist 3", subtext: "Venue 3", image: imageUrl },
  { id: "4", text: "Artist 4", subtext: "Venue 4", image: imageUrl },
  { id: "5", text: "Artist 5", subtext: "Venue 5", image: imageUrl },
];

const friendFeed = [
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    artist: "Tame Impala",
    venue: "The Forum",
    score: 92,
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    artist: "Flume",
    venue: "Red Rocks",
    score: 95,
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    artist: "Odesza",
    venue: "The Gorge",
    score: 98,
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    artist: "Fred again..",
    venue: "Madison Square Garden",
    score: 99,
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    artist: "Skrillex",
    venue: "Brooklyn Mirage",
    score: 96,
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <ThemedText type="capsTitle">TRENDING</ThemedText>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.8}
          >
            <IconSymbol name="location" size={16} color={Colors.accent} />
            <ThemedText type="linkSecondary" style={{ marginLeft: 4 }}>
              New York
            </ThemedText>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carouselItems.map((item) => (
            <View key={item.id} style={styles.carouselItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <ThemedText type="subtitle">{item.text}</ThemedText>
                <ThemedText type="default">{item.subtext}</ThemedText>
              </View>
            </View>
          ))}
        </ScrollView>
        <ThemedText type="capsTitle" style={{ padding: 8 }}>
          FRIENDS
        </ThemedText>
        {friendFeed.map((item, index) => (
          <FriendFeedItem
            key={index}
            images={item.image}
            profilePicUrl={item.profilePicUrl}
            artist={item.artist}
            venue={item.venue}
            score={item.score}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  carouselItem: {
    width: 124,
  },
  image: {
    width: 124,
    height: 124,
  },
  textContainer: {
    alignItems: "flex-end",
    padding: 8,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
});

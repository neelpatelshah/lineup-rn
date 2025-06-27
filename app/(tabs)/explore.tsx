import ExploreItem from "@/components/ExploreItem";
import Selector from "@/components/Selector";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const eventFeed = [
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    artist: "Tame Impala",
    venue: "The Forum",
    date: "2025-05-13",
    description: "An unforgettable night with Tame Impala at The Forum.",
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    artist: "Flume",
    venue: "Red Rocks",
    date: "2025-05-14",
    description: "Flume's electrifying performance at Red Rocks.",
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    artist: "Odesza",
    venue: "The Gorge",
    date: "2025-05-15",
    description: "Odesza's mesmerizing show at The Gorge.",
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    artist: "Fred again..",
    venue: "Madison Square Garden",
    date: "2025-05-16",
    description:
      "Fred again.. brought the house down at Madison Square Garden.",
  },
  {
    image: [
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",
    ],
    artist: "Skrillex",
    venue: "Brooklyn Mirage",
    date: "2025-05-17",
    description: "Skrillex's epic set at Brooklyn Mirage.",
  },
];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Selector />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {eventFeed.map((event, index) => (
          <ExploreItem
            key={index}
            images={event.image}
            artist={event.artist}
            venue={event.venue}
            date={event.date}
            description={event.description}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 8,
    paddingBottom: 32,
  },
});

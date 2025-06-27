import { ScrollView, StyleSheet } from "react-native";

import { FeedItem } from "@/components/FeedItem";
import { ThemedView } from "@/components/ThemedView";

const feed = [
  {
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",

    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    artist: "Tame Impala",
    venue: "The Forum",
    score: 92,
    username: "neel",
    date: "2025-05-01T20:00:00Z",
    review: "Amazing show with great visuals!",
    friends: [
      {
        username: "Alice",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      },
      {
        username: "Bob",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
      },
    ],
  },
  {
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",

    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    artist: "Flume",
    venue: "Red Rocks",
    score: 95,
    username: "john_doe",
    date: "2025-05-02T20:00:00Z",
    review: "Flume's set was electrifying! Can't wait for the next one.",
    friends: [
      {
        username: "Charlie",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
      },
      {
        username: "Dave",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
      },
    ],
  },
  {
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",

    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    artist: "Odesza",
    venue: "The Gorge",
    score: 98,
    username: "jane_smith",
    date: "2025-05-03T20:00:00Z",
    review: "Odesza's performance was out of this world! Loved every moment.",
    friends: [
      {
        username: "Eve",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
      },
      {
        username: "Frank",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    ],
  },
  {
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",

    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    artist: "Fred again..",
    venue: "Madison Square Garden",
    score: 99,
    username: "music_lover",
    date: "2025-05-04T20:00:00Z",
    review: "Fred again.. blew my mind! The energy was unreal.",
    friends: [
      {
        username: "Grace",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
      },
      {
        username: "Hank",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
      },
    ],
  },
  {
    image:
      "https://www.brooklynpaper.com/wp-content/uploads/2025/05/TIESTO2023_0513_072039-0774-@ChrisLavado.jpg?quality=51&w=1200",

    profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    artist: "Skrillex",
    venue: "Brooklyn Mirage",
    score: 96,
    username: "dj_fanatic",
    date: "2025-05-05T20:00:00Z",
    review: "Skrillex's set was a masterpiece! The crowd was electric.",
    friends: [
      {
        username: "Ivy",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
      },
      {
        username: "Jack",
        profilePicUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    ],
  },
];

export default function TabTwoScreen() {
  return (
    <ThemedView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {feed.map((item, index) => (
          <FeedItem
            key={index}
            username={item.username}
            profilePicUrl={item.profilePicUrl}
            artist={item.artist}
            venue={item.venue}
            score={item.score}
            date={item.date}
            review={item.review}
            friends={item.friends}
            image={item.image}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  feedContainer: {
    flex: 1,
    paddingTop: 50,
  },
});

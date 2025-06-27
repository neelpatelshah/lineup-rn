import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Dimensions, TouchableOpacity, View } from "react-native";
import Score from "./score";

type Friend = {
  username: string;
  profilePicUrl: string;
};

interface Props {
  username: string;
  profilePicUrl: string;
  artist: string;
  venue: string;
  score: number;
  date: string;
  review: string;
  friends: Friend[];
  image: string;
}

export function FeedItem({
  username,
  profilePicUrl,
  artist,
  venue,
  score,
  date,
  review,
  friends,
  image,
}: Props) {
  const { width: screenWidth } = Dimensions.get("window");

  return (
    <ThemedView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Score score={score} size={32} />
          <Image
            source={{ uri: profilePicUrl }}
            style={{
              width: 32,
              height: 32,
              borderRadius: 20,
              marginHorizontal: 8,
            }}
          />
          <ThemedText style={{ fontWeight: "bold" }}>{username}</ThemedText>
        </View>
        <View style={{ display: "flex", alignItems: "flex-end" }}>
          <Link
            href={{ pathname: "../event/[id]", params: { id: "1" } }}
            asChild
          >
            <TouchableOpacity>
              <ThemedText style={{ fontWeight: "bold" }}>{artist}</ThemedText>
            </TouchableOpacity>
          </Link>
          <ThemedText style={{ color: "#808080" }}>@{venue}</ThemedText>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 8, width: screenWidth }}>
        <ThemedText style={{ marginTop: 4, width: screenWidth / 2 }}>
          {review}
        </ThemedText>
        <Image
          source={{ uri: image }}
          style={{ width: screenWidth / 2, height: screenWidth / 2 }}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <ThemedView style={{ flexDirection: "row", marginTop: 8 }}>
          {friends.map((friend, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Image
                source={{ uri: friend.profilePicUrl }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  marginRight: 4,
                }}
              />
              <ThemedText style={{ fontSize: 12 }}>
                {friend.username}
              </ThemedText>
            </View>
          ))}
        </ThemedView>
        <ThemedText style={{ color: "#808080" }}>
          {new Date(date).toLocaleDateString()}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

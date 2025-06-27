import Score from "@/components/score";
import { ThemedText } from "@/components/ThemedText";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import ImageSideScroll from "./ImageSideScroll";

interface Props {
  images: string[];
  profilePicUrl: string;
  artist: string;
  venue: string;
  score: number;
}

export default function FriendFeedItem({
  images,
  profilePicUrl,
  artist,
  venue,
  score,
}: Props) {
  return (
    <View>
      <ImageSideScroll images={images} height={175} />
      <View
        style={{
          padding: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <ThemedText type="defaultSemiBold" style={{ marginRight: 8 }}>
            {artist}
          </ThemedText>
          <ThemedText type="default">@{venue}</ThemedText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Score score={score} />
          <Image
            source={{ uri: profilePicUrl }}
            style={{
              width: 24,
              height: 24,
              borderRadius: 16,
              marginHorizontal: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
}

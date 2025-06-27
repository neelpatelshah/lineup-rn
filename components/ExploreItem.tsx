import React from "react";
import { View } from "react-native";
import ImageSideScroll from "./ImageSideScroll";
import { ThemedText } from "./ThemedText";

interface Props {
  images: string[];
  artist: string;
  venue: string;
  date: string;
  description: string;
}

export default function ExploreItem({
  images,
  artist,
  venue,
  date,
  description,
}: Props) {
  const getFormattedDate = () => {
    const eventDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const isSameDay = (d1: Date, d2: Date) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDay(eventDate, today)) {
      return "today";
    }

    if (isSameDay(eventDate, tomorrow)) {
      return "tomorrow";
    }

    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("default", { month: "short" });
    const year = eventDate.getFullYear();
    const currentYear = today.getFullYear();

    if (year === currentYear) {
      return `${month} ${day}`;
    } else {
      return `${month} ${day} ${year}`;
    }
  };

  return (
    <View style={{ marginBottom: 8 }}>
      <ImageSideScroll images={images} height={200} />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 8,
          paddingTop: 4,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedText type="defaultSemiBold" style={{ marginRight: 8 }}>
            {artist}
          </ThemedText>
          <ThemedText type="default">@{venue}</ThemedText>
        </View>
        <ThemedText type="default" style={{ color: "#888" }}>
          {getFormattedDate()}
        </ThemedText>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <ThemedText type="default">{description}</ThemedText>
      </View>
    </View>
  );
}

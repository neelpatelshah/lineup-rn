import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

export default function Selector() {
  const [selected, setSelected] = React.useState<"forYou" | "trending">(
    "forYou"
  );

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => setSelected("forYou")}
        activeOpacity={0.7}
      >
        <ThemedText
          type="capsTitle"
          style={{
            color: selected === "forYou" ? Colors.text : Colors.secondaryText,
          }}
        >
          FOR YOU
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected("trending")}
        activeOpacity={0.7}
      >
        <ThemedText
          type="capsTitle"
          style={{
            color: selected === "trending" ? Colors.text : Colors.secondaryText,
          }}
        >
          TRENDING
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

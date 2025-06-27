import { Colors } from "@/constants/Colors";
import React from "react";
import { Text } from "react-native";

interface Props {
  size?: number;
  score: number;
}

const Score = ({ size = 16, score }: Props) => {
  return (
    <Text
      style={{
        fontSize: size,
        color: getColor(score),
        fontWeight: "bold",
      }}
    >
      {score}
    </Text>
  );
};

const getColor = (score: number) => {
  if (score >= 80) {
    return Colors.primary;
  } else if (score >= 60) {
    return Colors.accent;
  } else if (score >= 40) {
    return Colors.secondaryText;
  } else if (score >= 20) {
    return Colors.badSecondary;
  } else {
    return Colors.bad;
  }
};

export default Score;

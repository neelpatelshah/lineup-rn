import { Image } from "expo-image";
import React from "react";
import { Dimensions, ScrollView } from "react-native";

interface Props {
  images: string[];
  height: number;
}

export default function ImageSideScroll({ images, height }: Props) {
  const { width: screenWidth } = Dimensions.get("window");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={{
            width: screenWidth * 0.85,
            height,
          }}
          contentFit="cover"
        />
      ))}
    </ScrollView>
  );
}

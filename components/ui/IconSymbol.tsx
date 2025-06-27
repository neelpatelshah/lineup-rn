// Using MaterialIcons directly.
import { Colors } from "@/constants/Colors";
import Octicons from "@expo/vector-icons/Octicons";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

/**
 * An icon component that uses Material Icons.
 * This ensures a consistent look across platforms.
 */
export function IconSymbol({
  name,
  size = 24,
  color = Colors.icon,
  style,
}: {
  name: ComponentProps<typeof Octicons>["name"];
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Octicons color={color as string} size={size} name={name} style={style} />
  );
}

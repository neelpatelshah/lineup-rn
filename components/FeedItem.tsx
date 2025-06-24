import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export function FeedItem({
  author,
  content,
}: {
  author: string;
  content: string;
}) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold">{author}</ThemedText>
      <ThemedText>{content}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
});

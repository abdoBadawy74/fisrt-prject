import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => console.log("Pressed!")}>
        <Text>Hello, World!</Text>
      </Pressable>

      <Pressable
        onPressIn={() => console.log("Press In!")}
        onPressOut={() => console.log("Press Out!")}
        onLongPress={() => console.log("Long Pressed!")}
        style={{ marginTop: 20 }}
      >
        <Text>Press Me!</Text>
      </Pressable>
    </View>
  );
}

import { ImageBackground } from "expo-image";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 20, color: "#000" }}>
        Hello <Text style={{ color: "orange" }}>World</Text>
      </Text>

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1785370145074-918866a3986b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        }}
        style={{ width: 50, height: 50, marginTop: 20 }}
      ></ImageBackground>
    </View>
  );
}

import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#313030"} hidden />
    </View>
  );
}

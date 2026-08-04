import { View } from "react-native";
import Welcome from "../../components/Welcome";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Welcome("John", "USA")}
    </View>
  );
}

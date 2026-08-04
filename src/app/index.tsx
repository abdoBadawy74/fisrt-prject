import { useState } from "react";
import { ActivityIndicator, Button, StatusBar, View } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        style={{ marginBottom: 20 }}
        size="large"
        color="#707070"
        animating={isLoading}
      />
      <StatusBar barStyle="dark-content" />

      <Button title="Load Data" onPress={() => setIsLoading(!isLoading)} />
    </View>
  );
}

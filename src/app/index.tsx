import { Alert, Button, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Delete my account"
        onPress={() =>
          Alert.alert("Are you sure?", "This action cannot be undone.", [
            { text: "Cancel", style: "cancel" },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => console.log("Account deleted"),
            },
          ])
        }
      />
    </View>
  );
}

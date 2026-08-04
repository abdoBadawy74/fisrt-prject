import { Button, ScrollView } from "react-native";
export default function App() {
  return (
    <ScrollView>
      <Button title="Click me" onPress={() => alert("Button pressed!")} />
    </ScrollView>
  );
}

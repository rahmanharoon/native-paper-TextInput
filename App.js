import React from "react";
import { TextInput } from "react-native-paper";

export default function App() {
  const [sampleText, setSampleText] = React.useState("");
  return (
    <TextInput
      label="Email"
      value={sampleText}
      mode="outlined"
      multiline
      numberOfLines={5}
      onChangeText={(text) => setSampleText(text)}
      style={{
        width: "95%",
        alignSelf: "center",
        marginTop: 100,
      }}
      theme={{ roundness: 20, colors: { primary: "#636363" } }}
    />
  );
}

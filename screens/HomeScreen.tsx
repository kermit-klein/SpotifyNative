import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Album from "../components/Album";

const album = {
  id: "1",
  imageUri:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Cardi_B_-_Invasion_of_Privacy.png/220px-Cardi_B_-_Invasion_of_Privacy.png",
  artistHeadline: "Cardi Objective C, Taylor Swift",
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

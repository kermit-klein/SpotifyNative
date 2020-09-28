import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import AlbumCategory from "../components/AlbumCategory";

const albumCategory = {
  id: "1",
  title: "Happy Vibes",
  albums: [
    {
      id: "1",
      imageUri: "https://picsum.photos/200",
      artistHeadline: "Stan Getz, Cannonball Adderley",
    },
    {
      id: "2",
      imageUri: "https://picsum.photos/200",
      artistHeadline: "Charlie Parker, Gerry Mulligan",
    },
    {
      id: "3",
      imageUri: "https://picsum.photos/200",
      artistHeadline: "John Coltrane, Scott Hamilton",
    },
    {
      id: "4",
      imageUri: "https://picsum.photos/200",
      artistHeadline: "Miles Davis, Oliver Nelson",
    },
  ],
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
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

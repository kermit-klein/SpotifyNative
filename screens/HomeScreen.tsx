import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../src/graphql/queries";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
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

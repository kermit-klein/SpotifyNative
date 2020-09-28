import React from "react";
import { Text, View, FlatList } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import AlbumComponent from "../Album";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => (
  <View>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
    ></FlatList>
  </View>
);

export default AlbumCategory;
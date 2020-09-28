import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Album } from "../../types";

export type AlbumProps = {
  album: Album;
};

const Album = (props: AlbumProps) => (
  <View style={styles.container}>
    <Image source={{ uri: props.album.imageUri }} style={styles.image} />
    <Text style={styles.text}>{props.album.artistHeadline}</Text>
  </View>
);

export default Album;

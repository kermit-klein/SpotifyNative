import React from "react";
import { View, Text, Image } from "react-native";

export type AlbumProps = {
  id: string;
  imageUri: string;
  artistHeadline: string;
};

const Album = (props: AlbumProps) => {
  <View>
    <Image source={{ uri: props.imageUri }} />
    <Text>{props.artistHeadline}</Text>
  </View>;
};

export default Album;

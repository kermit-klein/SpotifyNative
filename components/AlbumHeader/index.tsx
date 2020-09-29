import React from "react";
import { Album } from "../../types";
import { Text } from "react-native";

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  return <Text style={{ color: "white" }}>Header</Text>;
};

export default AlbumHeader;

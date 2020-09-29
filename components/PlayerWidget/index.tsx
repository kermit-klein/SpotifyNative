import React from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const song = {
  id: "1",
  imageUri: "https://picsum.photos/200",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <FontAwesome name="play" size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;

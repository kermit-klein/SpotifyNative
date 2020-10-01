import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio/Sound";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const song = {
  id: "1",
  uri:
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
  imageUri: "https://picsum.photos/200",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlaybackStatusUpdate = (status) => {
    console.log(status);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

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
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome name="play" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;

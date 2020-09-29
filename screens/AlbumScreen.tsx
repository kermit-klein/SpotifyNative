import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const album = {
  id: "11",
  name: "Good Vibes",
  by: "Spotify",
  numberOfLikes: 345,
  imageUri: "https://picsum.photos/200",
  artistHeadline: "Taylor Swift, Justin Timberlake",
  songs: [
    {
      id: "1",
      imageUri: "https://picsum.photos/200",
      title: "High on You",
      artist: "Helen",
    },
    {
      id: "2",
      imageUri: "https://picsum.photos/200",
      title: "Lorem Ipsum",
      artist: "Lorem",
    },
    {
      id: "3",
      imageUri: "https://picsum.photos/200",
      title: "Creep",
      artist: "Radiohead",
    },
    {
      id: "4",
      imageUri: "https://picsum.photos/200",
      title: "High on You",
      artist: "Helen",
    },
  ],
};

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.warn(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello from Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;

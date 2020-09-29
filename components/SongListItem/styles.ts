import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "lightgrey",
    fontSize: 16,
  },
  image: {
    width: 75,
    height: 75,
  },
});

export default styles;

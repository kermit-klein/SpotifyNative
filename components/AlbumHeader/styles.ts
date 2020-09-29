import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 16,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 16,
  },
  creatorContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1CD05D",
  },
  buttonText: {
    color: "lightgray",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;

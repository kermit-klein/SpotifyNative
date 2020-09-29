import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
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
    width: "100%",
    textAlign: "center",
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
    margin: 10,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 50,
    width: 175,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "lightgray",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;

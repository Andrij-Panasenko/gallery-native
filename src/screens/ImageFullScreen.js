import { Image, StyleSheet, Dimensions } from "react-native";

const ImageFullScreen = ({ route }) => {
  const { image } = route.params;

  return <Image source={{ uri: image }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default ImageFullScreen;

import { Image, StyleSheet, Text, View } from "react-native";

const GalleryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.urls.small }}
        style={styles.image}
      />
      <Text style={styles.author}>{data.user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    overflow: "hidden",
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
});

export default GalleryItem;
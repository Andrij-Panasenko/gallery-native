import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const GalleryItem = ({ data }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Full image", {image: data.urls.full})}>
        <Image source={{ uri: data.urls.small }} style={styles.image} />
      </TouchableOpacity>

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
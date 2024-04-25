import { SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectGallery } from "../../redux/selectors";
import GalleryItem from "../GalleryItem/GalleryItem";

const galleryList = () => {
  const gallery = useSelector(selectGallery);
  return (
    <SafeAreaView>
      <ScrollView>
        {gallery.map((item) => (
          <GalleryItem data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default galleryList;

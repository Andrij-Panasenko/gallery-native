import { SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectGallery } from "../../redux/selectors";
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = () => {
  const gallery = useSelector(selectGallery);

  return (
    <SafeAreaView>
      <ScrollView>
        {gallery.map((item) => (
          <GalleryItem key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GalleryList;

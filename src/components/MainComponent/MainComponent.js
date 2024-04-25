import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { getUnsplashPhotos } from "../../redux/operations";
import GalleryList from "../galleryList/galleryList";

const MainComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnsplashPhotos);
  }, [dispatch]);

  return (
    <View>
      <GalleryList />
    </View>
  );
};

export default MainComponent;

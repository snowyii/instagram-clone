import React, { useEffect } from "react";
import { Image } from "react-native";
const useAspectRatio = (imageUrl) => {
  const [aspectRatio, setAspectRation] = React.useState(1.5);
  useEffect(() => {
    if (!imageUrl) return;

    Image.getSize(imageUrl, (width, height) => {
      setAspectRation(height / width);
    });
  }, [imageUrl]);
  return aspectRatio;
};

export { useAspectRatio };

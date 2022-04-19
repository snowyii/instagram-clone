import React from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet, Text, Image } from "react-native";

type propType = {
  typeRender: number;
  pictureList: object;
};
const { width, height } = Dimensions.get("screen");
const BlockGallery = ({ pictureList, typeRender }: propType) => {
  if (typeRender === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.mainPic}>
          <Image
            style={styles.mainPic}
            source={{ uri: pictureList[0].imageUrl }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.sidePic}>
          <Image
            source={{ uri: pictureList[1].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[2].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bottomPic}>
          <Image
            source={{ uri: pictureList[3].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[4].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[5].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  } else if (typeRender == 1) {
    return (
      <View style={styles.container}>
        <View style={styles.sidePic}>
          <Image
            source={{ uri: pictureList[1].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[2].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mainPic}>
          <Image
            style={styles.mainPic}
            source={{ uri: pictureList[0].imageUrl }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bottomPic}>
          <Image
            source={{ uri: pictureList[3].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[4].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[5].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  } else if (typeRender == 2) {
    return (
      <View style={styles.container}>
        <View style={styles.bottomPic}>
          <Image
            source={{ uri: pictureList[3].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[4].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[5].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mainPic}>
          <Image
            style={styles.mainPic}
            source={{ uri: pictureList[0].imageUrl }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.sidePic}>
          <Image
            source={{ uri: pictureList[1].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[2].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.bottomPic}>
          <Image
            source={{ uri: pictureList[3].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[4].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[5].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
        <View style={styles.sidePic}>
          <Image
            source={{ uri: pictureList[1].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
          <Image
            source={{ uri: pictureList[2].imageUrl }}
            style={styles.sidePicRen}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mainPic}>
          <Image
            style={styles.mainPic}
            source={{ uri: pictureList[0].imageUrl }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  mainPic: {
    width: (width * 2) / 3,
    height: (width * 2) / 3,
  },
  sidePic: {
    width: width / 3,
    height: (width * 2) / 3,
  },
  sidePicRen: {
    height: width / 3,
    width: width / 3,
  },
  bottomPic: {
    width: width,
    height: width / 3,
    flexDirection: "row",
  },
});

export default BlockGallery;

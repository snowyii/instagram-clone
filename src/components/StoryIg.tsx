import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

import { DATA } from "../mockdata/MOCK";
import { LinearGradient } from "expo-linear-gradient";
const url = `https://lh3.googleusercontent.com/0YJLk
eWZnL3jVFFXiTjPGB-Ppjw4OfjKkyd2VJx8Ns563itnGuFELNf-xsqDEafN6YP
mfzasbWeHbis85261kQQp4PhCKnsM=w960-rj-nu-e365`;

const StoryIg = ({ data, customStyle = {} }) => {
  return (
    <FlatList
      contentContainerStyle={{
        marginBottom: 8,
      }}
      style={[
        {
          borderBottomColor: "rgba(255,255,255,0.15)",
          borderBottomWidth: 0.5,
        },
        customStyle,
      ]}
      horizontal
      data={data}
      keyExtractor={(story) => story.storyId}
      renderItem={({ item, index }) => (
        <View
          style={{
            alignItems: "center",

            marginLeft: 10,
          }}
        >
          <View
            style={[
              styles.outer,
              {
                backgroundColor:
                  item.rela === "normal" ? "green" : "transparent",
                borderWidth: item.rela == "watch" ? 0.7 : 0,
                borderColor: "rgba(255,255,255,0.4)",
              },
            ]}
          >
            {item.rela == "close" ? (
              <LinearGradient
                start={[1, 2]}
                end={[0, 0]}
                colors={["red", "orange"]}
                style={styles.outer}
              >
                <View style={[styles.container]}>
                  <Image
                    source={{
                      uri: item.profilePic,
                    }}
                    style={styles.pic}
                    resizeMode="cover"
                  />
                </View>
              </LinearGradient>
            ) : (
              <View style={[styles.container]}>
                <Image
                  source={{
                    uri: item.profilePic,
                  }}
                  style={styles.pic}
                  resizeMode="cover"
                />
              </View>
            )}
          </View>

          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    borderRadius: 35,

    borderWidth: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  outer: {
    width: 69,
    height: 69,
    borderRadius: 35,

    justifyContent: "center",
    alignItems: "center",
  },
  pic: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  text: {
    fontSize: 13,
    color: "white",
  },
});
export default StoryIg;

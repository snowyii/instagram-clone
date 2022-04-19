import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
const DmHeader = () => {
  const navigation = useNavigation();
  const { state } = React.useContext(AuthContext);
  return (
    <View style={styles.contianer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {`${state.token}  `}
          <AntDesign name="down" size={12} color="white" />
        </Text>
        <Text style={{ color: "grey", fontSize: 12 }}>ตั้งสถานะ</Text>
      </View>
      <AntDesign
        name="videocamera"
        size={24}
        color="white"
        style={{ marginRight: 20 }}
      />
      <FontAwesome
        name="edit"
        size={24}
        color="white"
        style={{ marginRight: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default DmHeader;

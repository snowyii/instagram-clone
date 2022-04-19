import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SvgComponent from "../components/SvgComponent";
import { Context as AuthContext } from "../context/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const { state, login } = React.useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const handleLogin = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      login(username);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <SvgComponent
        style={{
          transform: [{ scale: 2 }],
          marginTop: 120,
          alignSelf: "center",
        }}
      />

      <View style={styles.textBox}>
        <TextInput
          style={styles.textInput}
          placeholder="หมายเลขโทรศัพท์ อีเมล หรือชื่อผู้ใช้"
          placeholderTextColor="grey"
          value={username}
          onChangeText={setUsername}
          editable={!processing}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        />
      </View>
      <View style={[styles.textBox, { marginTop: 10 }]}>
        <TextInput
          style={styles.textInput}
          placeholder="รหัสผ่าน"
          placeholderTextColor="grey"
          secureTextEntry
          value={password}
          onChangeText={setpassword}
          editable={!processing}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        />
      </View>
      <Text
        style={{
          color: "#2a9df4",
          alignSelf: "flex-end",
          marginTop: 20,
        }}
      >
        เข้าสู่ระบบด้วยลิงก์
      </Text>

      <TouchableOpacity
        disabled={password.length === 0 ? true : false}
        activeOpacity={0.8}
        style={{ opacity: password.length === 0 ? 0.5 : 1 }}
        onPress={handleLogin}
      >
        <View style={styles.button}>
          {processing ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white" }}>เข้าสู่ระบบ</Text>
          )}
        </View>

        <Text
          style={{
            color: "rgba(255,255,255,1)",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          หรือ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  textBox: {
    backgroundColor: "rgba(255,255,255, 0.07)",
    height: 45,
    width: "auto",
    marginTop: 50,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.3,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    color: "white",
  },
  button: {
    height: 45,
    backgroundColor: "#2a9df4",
    marginTop: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;

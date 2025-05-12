import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  async function saveToken(token){
    await SecureStore.setItemAsync("token", token);
    console.log(token);
  }

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        saveToken(response.data.token);
        navigation.navigate("Home");
      },
      (error) => {
        Alert.alert("Error", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={user.showPassword}
          value={user.password}
          onChangeText={(value) => {
            setUser({ ...user, password: value });
          }}
        />
        <TouchableOpacity
          onPress={() => setUser({ ...user, showPassword: !user.showPassword })}
        >
          <Ionicons
            name={user.showPassword ? "eye-off" : "eye"}
            size={24}
            color="#D9007B"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Button 
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D9007B",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    paddingRight: 10,
    marginTop:10
  },
  button: {
    backgroundColor: "#D9007B",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop:20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    paddingRight: 10,
    marginTop:15, 
  },
  passwordInput: {
    flex: 1,
    height: "40",
  },
});

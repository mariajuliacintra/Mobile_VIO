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

export default function CadastroOrganizador({ navigation }) {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleOrganizador() {
    await api.postOrganizador(organizador).then(
      (response) => {
        //console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        //console.log(error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o cadastro do Organizador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, email: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, senha: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, telefone: value });
        }}
      />

      <TouchableOpacity onPress={handleOrganizador} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color:"#D9007B",
    marginBottom:25,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#D9007B",
    padding: 10,
    borderRadius: 5,
    color: "black",
  },
});

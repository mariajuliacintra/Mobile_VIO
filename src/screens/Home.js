import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from '../axios/axios'
import CadastroEvento from "./CadastroEvento";

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("CadastroEvento")} style={styles.button}>
                <Text>Cadastro de Evento</Text>
            </TouchableOpacity>
            <Button title="Voltar para Login" onPress={()=> navigation.navigate("Login")}/>
        </View>
)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "pink",
    },
    button:{
        backgroundColor:'#D9007B',
        padding:10,
        borderRadius:5
    }
})
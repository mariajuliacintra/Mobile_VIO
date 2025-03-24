import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from '../axios/axios'
import CadastroEvento from "./CadastroEvento";

export default function Home({ navigation }){
    return(
        <View style={styles.header}>
       <Button
       title="Cadastrar Evento"
       onPress={() => navigation.navigate("CadastroEvento")}
       />

       <Button
       title="Cadastrar Ingresso"
       onPress={() => navigation.navigate("CadastroIngresso")}
       />

       <Button style={styles.button}
       title="Cadastrar Organizador"
       onPress={() => navigation.navigate("CadastroOrganizador")}
       />
    </View>
)}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#D9007B',
        padding:10,
        borderRadius:5
    }
})
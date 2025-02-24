import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from "react-native";
import api from '../axios/axios'

export default function Cadastro(){
    const [user, setUser] = useState({
        cpf:"", 
        email:"", 
        password:"", 
        name:"", 
        data_nascimento:""
    })

    async function handleCadastro(){
        await api.postCadastro(user).then(
            (response)=>{
                Alert.alert("OK", response.data.message)
            }, (error)=>{
                Alert.alert('Error', error.response.data.error)
            }
        )
    }

    return(
     <View style={styles.container}>
        <Text style={styles.title}>Faça Login</Text>
        <TextInput 
        style={styles.input}
        placeholder="name"
        value={user.name}
        onChangeText={(value)=> {setUser({...user,'name':value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value)=> {setUser({...user,'email':value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="CPF"
        value={user.cpf}
        onChangeText={(value)=> {setUser({...user,'cpf':value})}}
        />
        <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={user.data_nascimento}
        onChangeText={(value)=> {setUser({...user,'data_nascimento':value})}}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value) => {setUser({...user,'password':value})}}
        />
        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color:"#D9007B"
    },
    input:{
        width:'100%',
        height:40,
        borderBottomWidth:1,
        paddingHorizontal:10,
        marginBottom:20
    },
    button:{
        backgroundColor:'#D9007B',
        padding:10,
        borderRadius:5
    }
})
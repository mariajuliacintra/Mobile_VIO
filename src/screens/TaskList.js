import react from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TaskList({navigation}){
    const tasks = [
        {
            id:1,
            title:"Comprar Leite",
            date:"2025-04-07",
            time:"10:00",
            address:"Supermercado Noemia"},
        {
            id:2,
            title:"Enviar e-mail",
            date:"2025-06-20",
            time:"14:45",
            address:"Trabalho"},
        {
            id:3,
            title:"Estudar React Native",
            date:"2025-06-26",
            time:"00:00",
            address:"Casa"
        }
    ]

    const handleTaskPress = (task) => {
       navigation.navigate("TaskDetail",{task})
    }

    return(
        <View style={styles.contanier}>
            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString}
            renderItem={({item})=> (
                <TouchableOpacity 
                style={styles.itemCard} 
                onPress={()=> handleTaskPress(item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contanier:{
        flex:1,
        padding:20,
        paddingTop:50,
    },
    itemCard:{
        padding:15,
        backgroundColor:"pink",
        marginBottom:10,
        borderRadius:8,
    },
})
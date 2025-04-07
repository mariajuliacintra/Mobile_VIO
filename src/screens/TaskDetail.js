import react from "react";
import { View, Text } from "react-native";

export default function TaskDetail({route}){
    const {task} = route.params;

    return(
        <View>
            <Text>Detalhes da Tarefa: {task.title} </Text>
            <Text>Data: {task.date}</Text>
            <Text>Hora: {task.time}</Text>
            <Text>Local: {task.address}</Text>
        </View>
    )
}
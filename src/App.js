import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from "./screens/Login"

export default function App() {
  return (
    <View style={styles.container}>
       <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }, box2: {
    width: 50,
    height: 50,
    backgroundColor: 'pink'
  }, box3:{
    width: 50,
    height: 50,
    backgroundColor: '#AA3939'
  },
  box4:{
    width: 50,
    height: 50,
    backgroundColor: '#850000'
  }, 
  row:{
    flexDirection:'row'
  },
  text:{
    fontSize: 28,
    fontWeight: 'bold',
  },
  input:{
    borderWidth:1,
    borderColor: 'gray',
    width:'80%',
    padding:10,
    marginVertical:10,
  }
});

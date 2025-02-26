import {NavigationContainer} from "@react-navigation/native"; //IMPORTAÇÃO DE NAVEGAÇÃO
import { createStackNavigator } from "@react-navigation/stack"; //IMPORTAÇÃO DE NAVEGAÇÃO
import Login from "./screens/Login"
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


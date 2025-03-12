import {NavigationContainer} from "@react-navigation/native"; //IMPORTAÇÃO DE NAVEGAÇÃO
import { createStackNavigator } from "@react-navigation/stack"; //IMPORTAÇÃO DE NAVEGAÇÃO
import Login from "./screens/Login"
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import CadastroEvento from './screens/CadastroEvento';
import CadastroOrganizador from './screens/CadastroOrganizador';
import CadastroIngresso from './screens/CadastroIngresso';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador} />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


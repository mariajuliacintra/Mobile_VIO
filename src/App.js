import {NavigationContainer} from "@react-navigation/native"; //IMPORTAÇÃO DE NAVEGAÇÃO
import { createStackNavigator } from "@react-navigation/stack"; //IMPORTAÇÃO DE NAVEGAÇÃO
import Login from "./screens/Login"
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import CadastroEvento from './screens/CadastroEvento';
import CadastroOrganizador from './screens/CadastroOrganizador';
import CadastroIngresso from './screens/CadastroIngresso';
import Layout from "./components/Layout";
// import TaskList from "./screens/TaskList";
// import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreens";


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={()=>(
          <Layout><Login/></Layout>
        )}/>
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout><Cadastro/></Layout>
        )}/>
        <Stack.Screen name="EventoScreen" component={()=>(
          <Layout><EventosScreen/></Layout>
        )}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador} />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


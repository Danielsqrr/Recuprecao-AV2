
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Agendamento from './screens/login';
import Consulta from './screens/list';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Agendamento} />
        <Stack.Screen name="list" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

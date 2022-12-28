import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalColors } from './constants/GlobalColors';
import PersonalTrainerScreen from './screens/PersonalTrainerScreen';
import * as SplashScreen from 'expo-splash-screen';
import RegistrationPage from './screens/RegistrationPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen';
import ServicesScreen from './screens/ServicesScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthContextProvider from './store/auth-context';
import { useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import IoniconsCustom from './components/ui/IoniconsCustom';
import PugilatoScreen from './screens/pugilato/PugilatoScreen';
import FontAwesomeIcon from './components/ui/FontAwesomIcon';
import MaterialIcon from './components/ui/MaterialIcon';
import Icon from './components/ui/Icon';
import ServiziPugilato from './components/servizi/ServiziPugilato';
import ServiziPersonal from './components/servizi/ServiziPersonal';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {  
  const [token, setToken] = useState('') 
  
 

  useEffect(() => {
    async function fetchToken(){
      const token = await AsyncStorage.getItem('token')
     setToken(token)
    }    
    fetchToken()
  }, [token])

  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/font/Lora-Regular.ttf")
  }) 

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if(!fontsLoaded){
    return undefined
  } else {
    SplashScreen.hideAsync()
  } 

  function ServiceNavigator(){
    return (
    <Stack.Navigator screenOptions={{      
      headerStyle: {
        backgroundColor: globalColors.background
      },
    }}>
      <Stack.Screen name='Home' component={ServicesScreen} options={{
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: 'Servizi'
      }}/>
      <Stack.Screen name='ServiziPugilato' component={ServiziPugilato} options={{
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen name='ServiziPersonal' component={ServiziPersonal} options={{
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}/>
    </Stack.Navigator>
    )
  }
  
  function TabNavigator(){
    return (
    <Tab.Navigator screenOptions={({route}) => ({
      headerStyle: {
        backgroundColor: globalColors.background
      },
      headerTitle: '',
      tabBarIcon: () => {
        if(route.name === 'Notizie'){
          return <FontAwesomeIcon name='newspaper-o'/>
        }
        if(route.name === 'Servizi'){
          return <MaterialIcon />
        }
        if(route.name === 'Profilo'){
          return <Icon name='user' color='black'/>
        }
      },
   
    })}>
      <Tab.Screen name='Notizie' component={NewsScreen} options={{
        headerTintColor: 'white',
        headerTitle: 'Notizie',
        headerTitleAlign: 'center',
         
      }}/>
      <Tab.Screen name='Servizi' component={ServiceNavigator} options={{
        headerShown: false
         
      }}/>
      <Tab.Screen name='Profilo' component={ProfileScreen} options={{
        headerRight: () => {
          return (<View style={styles.headerRightContainer}>
            <Text style={styles.textHeaderRight}>Log out</Text>
            <IoniconsCustom name='exit' style={styles.icon}/>
          </View>)
          
        }
      }}/>
    </Tab.Navigator>
    )
  }

  

 
    const userRegistrated = <Stack.Navigator>
      <Stack.Screen name='PersonAccess' component={TabNavigator} options={{
      headerShown: false
    }}/>
    </Stack.Navigator>
    
   
    const newUserRoot = <Stack.Navigator >
    <Stack.Screen name='Welcome'component={CategoryScreen} options={{
      headerStyle: {
        backgroundColor: globalColors.background            
      },
      headerTitle: ''
    }}/>
    <Stack.Screen name='PersonalTrainer' component={PersonalTrainerScreen} options={{
      headerStyle: {
        backgroundColor: globalColors.background            
      },
      headerTitle: 'Personal Trainer',
      headerTintColor: 'white'
    }}/>    
    <Stack.Screen name='Registration' component={RegistrationPage} options={{
      headerStyle: {
        backgroundColor: globalColors.background            
      },
      headerTitle: 'Registrazione',
      headerTintColor: 'white'
    }}/>
    <Stack.Screen name='Pugilato' component={PugilatoScreen} options={{
      headerStyle: {
        backgroundColor: globalColors.background            
      },
      headerTitle: 'Pugilato',
      headerTintColor: 'white'
    }}/>    
    <Stack.Screen name='PersonAccess' component={TabNavigator}/>

  </Stack.Navigator>
  

  return (
    <AuthContextProvider>    
    <NavigationContainer>
      <StatusBar style='light'/>      
      {token && userRegistrated}
      {!token && newUserRoot}
    </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon:{
    marginRight: 20,
    marginLeft: 10
  },
  textHeaderRight: {
    color: 'white'
  }
});

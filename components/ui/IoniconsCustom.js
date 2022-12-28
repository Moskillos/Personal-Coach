import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Pressable } from 'react-native';
import { AuthContext } from '../../store/auth-context';

function IoniconsCustom({name, style}){
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    function logoutHandler(){
        
        authCtx.logout()
        navigation.navigate('Welcome')
    }
    
    return (
        <Pressable onPress={logoutHandler}>
            <Ionicons name={name} size={24} color='white' style={style} />
        </Pressable>
    )
}

export default IoniconsCustom
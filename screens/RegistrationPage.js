import { StyleSheet, View, Text, Keyboard, ActivityIndicator, Alert } from "react-native"
import { globalColors } from "../constants/GlobalColors"
import Input from "../components/form/Input"
import FaceGoogleLogIn from "../components/FaceGoogleLogIn"
import Button from "../components/ui/Button"
import { useContext, useEffect, useState } from "react"
import { createUser } from "../util/auth"
import { AuthContext } from "../store/auth-context"


function RegistrationPage({navigation}){
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    }) 
    const [registrationMode, setRegistrationMode] = useState(false)
    const [invalidCredential, setInvalidCredential] = useState(true)
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext)

    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", () => {
            setRegistrationMode(false)
        })
    }, [registrationMode])

    async function sendForm(){
       setIsAuthenticating(true)
       try{
        const token = await createUser(inputValues.email, inputValues.password)
        authCtx.authenticate(token)
        navigation.navigate('PersonAccess')
       } catch(error){
        Alert.alert('Questa e-mail è già esistente')
       }
       
       setIsAuthenticating(false)
    }

    function registrationChoise(){
       setRegistrationMode(true)
    }

    function inputChangeHandler(key, value){          
        setInputValues((curr) => {
            return {
                ...curr,
                [key]: value
            }
        })
       if(inputValues.email.length > 0 && inputValues.password.length > 0){
            setInvalidCredential(false)
       }       
    } 
    
    let buttonRegistration

    if(isAuthenticating){
        buttonRegistration = <ActivityIndicator size='large'/>
    } else {
        buttonRegistration = <Button text='Sign in' disabled={invalidCredential} onPress={sendForm}/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.modalRegistration}>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>Registrati gratuitamente per richiedere</Text>
                    <Input label='Email' inputConfig={{
                        keyboardType: 'email-address',
                        onChangeText: inputChangeHandler.bind(this, 'email'),
                        placeholder: 'example@gmail.com',
                        value: inputValues.email,
                        onFocus: registrationChoise,
                        textContentType: 'emailAddress'
                    }}/>
                    <Input label='Password' inputConfig={{
                        keyboardType: 'default',
                        onChangeText: inputChangeHandler.bind(this, 'password'),
                        secureTextEntry: true,
                        value: inputValues.password,
                        onFocus: registrationChoise
                    }}/>
                    {buttonRegistration}
                </View>
                {!registrationMode &&<View style={styles.socialIconContainer}>
                    <Text style={styles.socialIconText}>Altrimenti puoi registrarti con Facebook o Google</Text>
                    <FaceGoogleLogIn />
                </View>}
            </View>
        </View>
    )
}

export default RegistrationPage

const styles = StyleSheet.create({
    container:{
        backgroundColor: globalColors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalRegistration:{
        width: '90%',
        height: '70%',
        backgroundColor: '#1723C9',
        borderRadius: 10,
        elevation: 4,
        paddingVertical: 30,
        paddingHorizontal: 30,
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: 'white',
        fontSize: 22
    },
    socialIconContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    socialIconText: {
        color: 'white',
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center'
    },
})
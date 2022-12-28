import { useEffect} from "react"
import {  View, Text, Image, StyleSheet,Pressable } from "react-native"
import { globalColors } from "../../constants/GlobalColors"
import * as MailComposer from 'expo-mail-composer'

function ServiziPugilato({route}){   
    
    const servizio = route.params.servizio
    console.log(route)
    
    useEffect(() => {
        async function MailAvailability(){
            await MailComposer.isAvailableAsync()
        }   
        MailAvailability()     
    },[])

    function onPressButton(){
        MailComposer.composeAsync({            
            body: '',
            recipients: ['moschilloantonio@libero.it']
        })
    }

    
    return (
        <View>
        <View style={styles.container}>
        <Image source={servizio.image} style={styles.image}/>
        <View style={styles.serviceDescriptionContainer}>
            <Text style={[styles.text,styles.textTitle]}>Vieni a provare la boxe popolare ad Ariano Irpino</Text>
            <Text style={styles.text}>{servizio.description}</Text>                
        </View>
        <View style={styles.contact}>
            <Text style={styles.text}>Scrivi su whatApp al numero 3396366128</Text>
            <Text style={styles.text}>oppure</Text>
            <Pressable android_ripple={{color: '#101010'}} style={styles.button} onPress={onPressButton}>
                <Text style={styles.text}>Inviaci una mail</Text>
            </Pressable>
        </View>
    </View>
        
        </View>
        
    )
}

export default ServiziPugilato

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: globalColors.background
    },
    image: {
        width: '100%',
        height: 300
    },
    serviceDescriptionContainer: {
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'white',        
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'Lora-Regular'
    },
    textTitle:{
        fontWeight: 'bold'
    },
    
    contact: {
        alignItems: 'center',
        marginTop: 20    
    },
    
    button: {
        backgroundColor: 'green',
        width: '30%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        elevation: 5
    }
})
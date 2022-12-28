
import { Text, StyleSheet, Pressable } from "react-native"

function ServiceCard({service, onPress}){
    function onChoise(serviceChoised){
       onPress(serviceChoised)
    }
    
    return (
    <Pressable style={styles.container} onPress={onChoise.bind(this, service)}>
        <Text style={styles.serviceTitle}>{service.title}</Text>
    </Pressable>
)}

export default ServiceCard

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderWidth: 2,
        borderColor: 'green',
        paddingVertical: 20,
        alignItems: 'center',
        marginVertical: 5
    },
    serviceTitle: {
        color: 'white',
        fontFamily: 'Lora-Regular',
        fontSize: 20
    }
})
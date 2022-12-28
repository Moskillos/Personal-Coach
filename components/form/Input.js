
import { StyleSheet, View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"

function Input({label, inputConfig}){
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...inputConfig}></TextInput>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '80%'
    },
    label: {
        color: 'white'
    },
    input:{
        backgroundColor: 'white',
        marginVertical: 5,
        width: '100%',
        padding: 5
    },
    
})
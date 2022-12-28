import { View ,Text, StyleSheet} from "react-native"
import { globalColors } from "../constants/GlobalColors"
import FormSchedaSingola from "./form/FormSchedaSingola"

function SchedaSingola(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compila il questionario per ricevere la tua scheda personalizzata</Text>
            <FormSchedaSingola />
        </View>
        
    )
}

export default SchedaSingola

const styles = StyleSheet.create({
    container: {        
        alignItems: 'center'        
    },
    title:{
        paddingHorizontal: 30,
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: 'white'
    }
})
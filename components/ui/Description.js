import { View, Text, StyleSheet } from "react-native"
import SecondButton from "./SecondButton"

function Description({description, onPress}){   

    return (
        <View style={styles.descriptionContainer}>
                <Text style={styles.text}>{description}</Text>
                <SecondButton onPress={onPress}/>
        </View>
    )
}

export default Description

const styles = StyleSheet.create({
    descriptionContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily : 'Lora-Regular'
    }
})
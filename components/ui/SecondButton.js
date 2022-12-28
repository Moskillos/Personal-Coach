import { Pressable, StyleSheet, Text } from "react-native"

function SecondButton({onPress}){
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>Vai</Text>
        </Pressable>
    )
}

export default SecondButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})
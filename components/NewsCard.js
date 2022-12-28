// Questa parte dovrà avere un collegamento Api in modo da aggiornare le news senza modificare il codice dell'app
// Richiede progettazione back-end

import { Image, StyleSheet, View, Text } from "react-native"
import { globalColors } from "../constants/GlobalColors"

function NewsCard({notizia}){  

    const image = notizia.image    
    
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{notizia.title}</Text>
                <Text style={styles.description}>{notizia.description}</Text>
            </View>
        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container:{        
        alignItems: 'center',        
        borderWidth: 1,
        borderColor: globalColors.border,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 10,
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: 300,
    },
    textContainer: {
        padding: 10,
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Lora-Regular'
    },
    description: {
        fontSize: 19,
        fontFamily: 'Lora-Regular'
    }
})
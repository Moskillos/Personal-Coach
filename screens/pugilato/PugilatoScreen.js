import { View, Image, Text, StyleSheet } from "react-native"
import { globalColors } from "../../constants/GlobalColors"
import { pugilatoServices } from "../../util/data"
import Card from "../../components/Card"

function PugilatoScreen(){
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri: 'https://www.mmawiki.org/it/wp-content/uploads/2012/07/boxe.jpg',  width: '90%', height: 200}}/>
        </View>
        <View>
            <Card list={pugilatoServices}/>
        </View>
    </View>
    )
}

export default PugilatoScreen

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: globalColors.background   
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
        
    }
})
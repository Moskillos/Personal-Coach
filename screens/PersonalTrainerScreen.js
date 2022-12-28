import { Image,  StyleSheet, View } from "react-native"
import { globalColors } from "../constants/GlobalColors"
import { useState } from "react"
import { personalTrainerServices} from '../util/data'
import Card from "../components/Card"
import FirstModal from '../components/FirstModal'

function PersonalTrainerScreen(){
    const [opacity, setOpacity] = useState(true)

    return (
        <View style={[styles.container, opacity && styles.opacityModal]}>
            <FirstModal onPress={() => setOpacity(false)}/> 
            <View style={styles.image}>
                <Image source={{uri:'https://www.donnapop.it/wp-content/uploads/2020/03/Personal-Trainer.jpg', width: '90%', height: 200}} />
            </View>
            <View style={styles.cardsService}>
                <Card list={personalTrainerServices}/>
            </View>
            
        </View>
           
        )
}

export default PersonalTrainerScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: globalColors.background,
        
    },
    image: {
        padding: 20,
        alignItems: 'center'
    },
    cardsService: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    },
    opacityModal: {
        opacity:0.5,
        
    }
})


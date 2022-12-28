import { ScrollView, StyleSheet, Text, View } from "react-native"
import ServiceCard from "../components/ServiceCard"
import { globalColors } from "../constants/GlobalColors"
import { personalTrainerServices, pugilatoServices } from "../util/data"

function ServicesScreen({navigation}){
    function onPugilatoServiceChosen(service){       
        navigation.navigate('ServiziPugilato', {
            servizio: service
        })
    }

    function onPersonalTrainerServiceChosen(service){
        navigation.navigate('ServiziPersonal',{
            servizio: service
        })
    }

    const pugilato = pugilatoServices.map((item) => {
        return <ServiceCard key={item.id} service={item} onPress={onPugilatoServiceChosen}/>
    })

    const personTrainer= personalTrainerServices.map((item) => {
        return <ServiceCard key={item.id} service={item} onPress={onPersonalTrainerServiceChosen}/>
    })

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.serviceContainer}>
            <Text style={styles.serviceTitle}>Pugilato</Text>
            {pugilato}
        </View>
        <View style={styles.serviceContainer}>
            <Text style={styles.serviceTitle}>Personal Trainer</Text>
            {personTrainer}
        </View>
        <View style={styles.serviceContainer}>
            <Text style={styles.serviceTitle}>Alimentazione & Integratori</Text>
        </View>
    </ScrollView>
)}

export default ServicesScreen

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        padding: 20,
        backgroundColor: globalColors.background
    },
    serviceContainer:{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: globalColors.border,
        width: '80%',
        marginVertical: 20,
        paddingBottom: 20
    },
    serviceTitle: {
        marginTop: -10,
        color: 'white',
        backgroundColor: globalColors.background,
        paddingHorizontal: 5,
        fontSize: 21,
        marginBottom: 20
    },
    
})
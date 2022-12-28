import { StyleSheet, Text, View, Linking } from "react-native"
import CardCategory from "../components/CardCategory"
import { globalColors } from "../constants/GlobalColors"
import { categories } from "../util/data"

function CategoryScreen({navigation}){  
   
    
    function onCategoryChoise(category){
        if(category.id === 1){
            navigation.navigate('Pugilato')
        }
        if(category.id === 2){
        navigation.navigate('PersonalTrainer')
        }
        if(category.id === 3){
            Linking.openURL('https://lightwas.goherbalife.com/Catalog/Home/Index/it-IT')
           
        }
    }

    return <View style={styles.container}>
        <View style={styles.welcomeText}>
            <Text style={styles.welcome}>Benvenuto</Text>
        <Text style={styles.choiseYourServiceText}>Scegli il servizio che desideri!</Text>
        </View>        
           <CardCategory categories={categories} onPress={onCategoryChoise}/>
             
    </View>
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: globalColors.background
    },
    welcomeText:{
        alignItems: 'center',
        marginTop: 70
    },
    welcome:{
        fontSize: 36,
        color: 'white'
    },
    choiseYourServiceText:{
        color: 'white',
        fontSize: 20
    }
})
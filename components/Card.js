import { useState } from "react"
import { Text, Pressable, View, StyleSheet, FlatList } from "react-native"
import { globalColors } from "../constants/GlobalColors"
import Description from "./ui/Description"
import { useNavigation } from "@react-navigation/native"
import Icon from "./ui/Icon"

function Card({list}){
    const [inizialState, setInizialState] = useState(list);    
    const navigation = useNavigation()
    
    
    function CardService(itemData){
        function navigationHandler(){
        navigation.navigate('Registration', {
            id: itemData.item.id
        })
    }
        
        function openDescription(event){
            const index = inizialState.findIndex((item) => item.id === event.id)
            setInizialState(prev => {
                return [
                    ...prev,
                    prev[index].show = !event.show
                ]
            })
            
        }

        
        return ( 
        <View>
            <Pressable onPress={openDescription.bind(this, itemData.item)} style={styles.container}>
             <View style={styles.cardContainer}>
                <Icon name={itemData.item.icon} color={'white'}/>
                <Text style={styles.text}>{itemData.item.title}</Text>
             </View>
             {itemData.item.show &&<Description description={itemData.item.description} onPress={navigationHandler}/>}
            </Pressable>
            
        </View>
    )
    }

    return (        
            <FlatList style={styles.flatListStyle} contentContainerStyle={styles.contentContainer} data={list} renderItem={CardService} keyExtractor={(data) => data.id}/>
       
    )
    
}

export default Card

const styles = StyleSheet.create({
    
    flatListStyle: {        
        width: '100%',
        
    },
    container: {        
        minWidth: '90%',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    contentContainer: {
        alignItems: 'center'
    },
    cardContainer: {
        width: '90%',
        maxWidth: '90%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: globalColors.border,
        borderWidth: 2,        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'     
    },
    text: {
        color: 'white',
        fontSize: 24
    },
    
    wrapper: {
        alignItems: 'center'
    }
})


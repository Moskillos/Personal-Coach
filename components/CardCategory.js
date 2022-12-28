
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import { globalColors } from "../constants/GlobalColors"


function CardCategory({categories, onPress}){ 
    

    function renderCategory(categories){
        
        const image = categories.item.imgBk    
        
        function itemPressed(category){
            onPress(category)
        }
        
        return (             
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>                   
                    <Pressable android_ripple={{color: '#101010'}} style={styles.press} onPress={itemPressed.bind(this, categories.item)}>
                    <Text style={styles.text}>{categories.item.title}</Text>                    
                </Pressable>      
                
                </ImageBackground>
        </View>          
                
           
        )
    }

    return <FlatList data={categories} renderItem={renderCategory} keyExtractor={(id) => id.id} />
}

export default CardCategory

const styles = StyleSheet.create({    
    container: {
        minWidth: '90%',
        borderColor: globalColors.border,
        borderWidth: 2,
        height: 70,
        borderRadius: 20,
        marginVertical: 30,
        overflow: 'hidden',
        
      },    
    image: {
             
    },
    press:{        
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(0,0,0,0.4)`
    },
    text: {
        fontFamily: 'Lora-Regular',
        fontSize: 32,
        color: 'white',
        
    }    
})
import { useState } from "react"
import { Pressable, View, Text, StyleSheet } from "react-native"

function InputSelect({items}){
    const [isVisible, setIsVisible] = useState(false)
    const [textOnSelect, setTextOnSelect] = useState('- seleziona')

    function onInputSelected(){
        setIsVisible(!isVisible)
    }

    function onItemSelected(item){
        setTextOnSelect(item)
        setIsVisible(false)
    }

    const itemToDrop = items.map((item) => {
        return <Pressable style={styles.itemDropped} onPress={onItemSelected.bind(this,item)}>
        <Text>{item}</Text>
    </Pressable>
    })

    return (
    <View>
    <Pressable onPress={onInputSelected} style={styles.select}>
        <View>
            <Text style={styles.selectText}>{textOnSelect}</Text>
        </View>
    </Pressable>
    {isVisible && <View style={styles.dropperContainer}>{itemToDrop}</View>}
    
    </View>
    
    
)}

export default InputSelect

const styles = StyleSheet.create({
    select: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        position: 'relative',
    },
    selectText: {
        fontSize: 15
    },
    dropperContainer: {
        bottom: -30,
        position: 'absolute',
        width: '70%',
        elevation: 3
    },
    itemDropped: {
        backgroundColor: '#6D4E38',
        padding: 5,        
        marginLeft: 10,            
        
    }
})
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { globalColors } from "../../constants/GlobalColors"

function Button({text,disabled, onPress}){
    const [isPressed, setIsPressed] = useState(false)



    return (        
            <Pressable android_ripple='#B87676' onPress={onPress} onPressIn={()=>setIsPressed(true)} onPressOut={()=>setIsPressed(false)} style={({pressed})=> [styles.button, pressed && !disabled && styles.pressed, disabled && styles.disabled]}>
                <Text style={[styles.text, isPressed && !disabled && styles.textPressed]}>{text}</Text>
                
            </Pressable>
        
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: globalColors.background,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    pressed: {
        
        backgroundColor: 'white'
    },
    textPressed : {
        color: 'black'
    },
    disabled: {
        opacity: 0.5
    }
})
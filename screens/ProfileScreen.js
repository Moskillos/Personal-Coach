import { StyleSheet, Text, View } from "react-native"
import Icon from "../components/ui/Icon"

function ProfileScreen(){
    return (
    <View style={styles.container}>
        <View style={styles.userIcon}> 
            <Icon name={'user'}/>
        </View>
        <View>
            
        </View>
    </View>
)}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    userIcon: {        
        marginVertical: 25,
    }
})
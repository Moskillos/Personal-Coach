import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const FaceGoogleLogIn = () => {
    return (
        <View style={styles.container}>
            <AntDesign style={styles.iconStyle} name="facebook-square" size={50} color="white" />
            <AntDesign name="google" size={50} color="white" />
        </View>
        
    )
    

}

export default FaceGoogleLogIn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconStyle:{
        marginHorizontal: 20
    }
})
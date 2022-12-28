import { Modal, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Button from "./ui/Button";

function FirstModal({onPress}){
    const [modalIsVisible, setModalIsVisible] = useState(true)

    function closeModal(){        
        setModalIsVisible(false)
        onPress()
    }
    return (
        
            <Modal
                animationType="fade"
                visible={modalIsVisible}
                transparent={true}
                style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                    <Text style={styles.modalText}>In questa app tutti servizi offerti vengono svolti da veri personal trainer! Non viene utilizzato alcun bot nella creazione dei piani di allenamento e consigli nutrizionali.</Text>
                    
                    <Button text="Close Modal" onPress={closeModal}></Button>
                    </View>
                    
                </View>
            </Modal>
            
        
    )
}

export default FirstModal

const styles = StyleSheet.create({    
    modal:{
     alignItems: 'center',
     justifyContent: 'center',
     
    },
    modalContainer: {    
     alignItems: 'center',
     flex: 1,
     justifyContent: 'center',
     
    
    },
    modalContent: {
     width: '80%',
     backgroundColor: 'white',
     padding: 20,
     
    },
    modalText: {
     fontSize: 22,
     marginBottom: 20
    }
 })
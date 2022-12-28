import { Text,View } from "react-native"
import FormSchedaSingola from "../form/FormSchedaSingola"

function ServiziPersonal({route}){
    const servizio = route.params.servizio
    return <View>
        <FormSchedaSingola />
    </View>
}

export default ServiziPersonal
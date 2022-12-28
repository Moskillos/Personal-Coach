import { View, Text } from "react-native"
import InputSelect from "./InputSelect"


function FormSchedaSingola(){
  const sesso = ['Uomo', 'Donna']

  return (
    <View>
      <View>
        <Text>Sesso</Text>
        <InputSelect items={sesso}/>
      </View>
      <View>
        <Text>Età</Text>
        <InputSelect items={sesso}/>
      </View>
      <View>
        <Text>Altezza</Text>
        <InputSelect items={sesso}/>
      </View>
      <View>
        <Text>Peso</Text>
        <InputSelect items={sesso}/>
      </View>
    </View>
  )
}

export default FormSchedaSingola
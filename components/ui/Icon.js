import { AntDesign } from '@expo/vector-icons';

function Icon({name, color}) {
    

    return (
        <AntDesign name={name} size={30} color={color}/>
    )
}

export default Icon
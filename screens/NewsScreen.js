import { FlatList, StyleSheet } from "react-native"
import NewsCard from "../components/NewsCard"
import { globalColors } from "../constants/GlobalColors"
import { news } from "../util/data"

function NewsScreen(){

    function renderNewsCard(itemData){
        return <NewsCard notizia={itemData.item}/>
    }

    return <FlatList contentContainerStyle={styles.flatList} data={news} renderItem={renderNewsCard} keyExtractor={(id) => id.id} />
}
export default NewsScreen

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: globalColors.background,
        padding: 20
    }
})
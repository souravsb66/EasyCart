import { View, StyleSheet, Image, Text } from "react-native"
import { RecommendedCardIcon } from "../../../assets";

const RecommendedCard = () => {
  return (
    <View style={styles.recommendedCard}>
        <View style={{ display: 'flex', alignItems: 'center',}}>
            <Image source={RecommendedCardIcon} style={{width: 62, height: 62}} />
        </View>
        <View style={{bottom: 0}} >
            <Text style={{fontSize: 14, lineHeight: 20, fontWeight:"600"}} >$325</Text>
            <Text style={{fontSize: 12, lineHeight: 16, fontWeight:"400", color:"#616A7D"}}>Clown Tang.H03</Text>
        </View>
    </View>
  )
}

export default RecommendedCard

const styles = StyleSheet.create({
    recommendedCard: {
        width: 160,
        height: 194,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between'
    }
});
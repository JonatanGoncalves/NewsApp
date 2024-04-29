import { Image, StyleSheet, Text, View } from "react-native";

export default function NoticiasScreen() {
    return(
        <View style={styles.container}>
            <Text>Aqui Temos uma Notícia Breve</Text>
            <Text>{"\n"}</Text>
            <Image 
            source={require("../../assets/Copyright.png")}
            />
            <Text>{"\n"}</Text>
            <Text>Roblox sofre de Copyright de Pokemon e não consegue lançar jogo referente ao jogo</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }
    });
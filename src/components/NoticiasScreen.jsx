import { StyleSheet, Text, View } from "react-native";

export default function NoticiasScreen() {
    return(
        <View style={styles.container}>
            <Text>Aqui Temos uma Notícia Breve</Text>
            <Text>{"\n"}</Text>
            <Text>Mulher dessenterra tio para fazer empréstimo no nome do tio.</Text>
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
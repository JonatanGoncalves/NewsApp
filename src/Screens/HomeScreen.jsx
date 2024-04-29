import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Tela de Notícias</Text>
            <Text>{"\n"}</Text>
            <Button
            title='Ir Para a Tela de Notícias'
            onPress={() =>
            navigation.navigate('Notícias', { name: 'Notícias' })}
        />
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
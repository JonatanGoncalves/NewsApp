import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <View>
            <Button
            title='Ir Para a Tela de Notícias'
            onPress={() =>
            navigation.navigate('Notícias', { name: 'Notícias' })}
        />
        </View>
    )
}
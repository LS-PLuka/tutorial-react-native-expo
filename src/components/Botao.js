import {View, Text, StyleSheet} from 'react-native';

export default function Botao() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.botao}>Ver mais</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  botao: {
    backgroundColor: '#543dbbff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    marginTop: 30,
  },
})

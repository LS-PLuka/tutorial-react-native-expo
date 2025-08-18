import {View, Text, StyleSheet} from 'react-native';

export default function Card() {
    return (
        <>
        <View style={styles.card}>
            <View style={styles.logo}></View>
                
            <View style={styles.name}>
                <Text style={styles.titulo_card}>Card </Text>
                <Text>Descrição do card</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  card: {
    width: '90%',
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  titulo_card: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

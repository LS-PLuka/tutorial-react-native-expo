import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}></View>
        <Text style={styles.titulo_menu}>Título</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.logo}></View>
        
        <View style={styles.name}>
          <Text style={styles.titulo_card}>Card 1</Text>
          <Text>Descrição do card 1</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.logo}></View>
        
        <View style={styles.name}>
          <Text style={styles.titulo_card}>Card 2</Text>
          <Text>Descrição do card 2</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.logo}></View>
        
        <View style={styles.name}>
          <Text style={styles.titulo_card}>Card 3</Text>
          <Text>Descrição do card 3</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.logo}></View>
        
        <View style={styles.name}>
          <Text style={styles.titulo_card}>Card 4</Text>
          <Text>Descrição do card 4</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.logo}></View>
        
        <View style={styles.name}>
          <Text style={styles.titulo_card}>Card 5</Text>
          <Text>Descrição do card 5</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.botao}>Ver mais</Text>
      </View>

      <View style={styles.footer}>
        <Text>Pedro Luka</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#543dbbff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  logo: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  titulo_menu: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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

  botao: {
    backgroundColor: '#543dbbff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    marginTop: 30,
  },

  footer: {
    width: '100%',
    height: 100,
    backgroundColor: '#543dbbff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

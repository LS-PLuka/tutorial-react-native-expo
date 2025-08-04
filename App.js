import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_main}>
        <Text style={styles.title}>Testando React Native com Expo</Text>
      </View>

      <View style={styles.container_desc}>
        <Text style={styles.desc}>Você pode começar a desenvolver sua aplicação aqui!</Text>
        <Text style={styles.desc}>Para mais informações, visite a documentação do Expo.</Text>
      </View>

      <View>
        <button style={styles.button}>Expo Go</button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Noto Sans',
  },

  container_main: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  container_desc: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },

  desc: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },

  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  }
});

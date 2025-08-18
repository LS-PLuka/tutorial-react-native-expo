import { View, Text, StyleSheet } from 'react-native';

// Importando Componentes
import Header from './src/components/Header.js';
import Card from './src/components/Card.js';
import Botao from './src/components/Botao.js';
import Footer from './src/components/Footer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      <Botao />

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

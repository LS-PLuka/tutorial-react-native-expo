import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Importando Componentes
import Header from '../components/Header.jsx';
import Card from '../components/Card.jsx';
import Botao from '../components/Botao.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header img='https://s3.amazonaws.com/chico-rei-blogs/content/images/2021/10/capa-cinema-em-casa.jpg' />
      
      <View style={styles.nav}>
        <Link href={'contact'} style={styles.navLink}><Text>Contato</Text></Link>
        <Link href={'about'} style={styles.navLink}><Text>Sobre</Text></Link>
        <Link href={'profile'} style={styles.navLink}><Text>Perfil</Text></Link>
      </View>

      <Card 
        title='Breaking Bad' 
        desc='Um professor de química vira produtor de metanfetamina para sustentar a família.' 
        img='https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg' 
      />
      
      <Card 
        title='De Volta para o Futuro' 
        desc='Um jovem viaja no tempo com a ajuda de um cientista excêntrico.'
        img='https://m.media-amazon.com/images/S/pv-target-images/08752e6457ef3d5d54df1e262d02163b0911939f46418407dddea13535c9a668.jpg' 
      />
      
      <Card 
        title='Matrix' 
        desc='Um hacker descobre que o mundo é uma simulação controlada por máquinas.'
        img='https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png' 
      />
      
      <Card 
        title='Dark' 
        desc='Quatro famílias de uma cidade alemã enfrentam segredos e viagens no tempo.'
        img='https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg'  
      />
      
      <Card 
        title='Lost' 
        desc='Sobreviventes de um acidente aéreo tentam sobreviver em uma ilha misteriosa.'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqmbRJE9RMtOhOy28SnRTvqp9VPCIM2OCEA&s'  
      />

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
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 15,
  },
  navLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#543DBB',
  },
})

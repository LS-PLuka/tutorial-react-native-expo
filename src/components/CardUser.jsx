import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router, useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardUser({ id, name, email, avatar, users, setUsers }) {
    const router = useRouter()
  
    const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE',
    })
    
    if (response.ok) {
        console.log('Usuário deletado com sucesso.')
        const updateUsers = users.filter(user => user.id !== id)
        setUsers(updateUsers)
    } else {
        console.log('Erro ao deletar usuário.')
    }
  }

  const handleEdit = async () => {
    console.log('EDITAR USUÁRIO.')

    router.push({
        pathname: '/editUser',
        params: { id, name, email, pass, avatar }
    })
  }
    
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: avatar }} />
      
      <View style={styles.name}>
        <Text style={styles.titulo_card}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View>
        <Pressable onPress={handleDelete} >
            <EvilIcons name="trash" size={24} color="black" />
        </Pressable>

        <Pressable onPress={handleEdit} >
            <AntDesign name="edit" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
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
    color: '#000'
  },
  titulo_card: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000'
  },
  email: {
    color: '#000'
  }
});

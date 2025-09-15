import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import CardUser from '../components/CardUser.jsx';

export default function Contact() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function listUsers() {
      try {
        const response = await fetch('http://localhost:5000/user')
        if (response.ok) {
          const data = await response.json()
          setUsers(data.users)
        } else {
          console.log('Erro ao listar usuários.')
        }
      } catch (error) {
        console.log(error)
      }
    }
    listUsers();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Contatos</Text>
      
      {users.map(user => (
        <CardUser
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
          users={users}
          setUsers={setUsers}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

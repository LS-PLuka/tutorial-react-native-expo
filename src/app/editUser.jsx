import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { useUserStore } from '../stores/useUserStore.js';

export default function EditUser() {
  const router = useRouter();
  const {users, setUsers } = useUserStore()

  const {id, name: eName, email: eEmail, avatar: eAvatar} = useGlobalSearchParams()

  const [name, setName] = useState(eName);
  const [email, setEmail] = useState(eEmail);
  const [avatar, setAvatar] = useState(eAvatar);

  const handleEdit = async () => {
    const profile = {
        name,
        email,
        avatar
    }

    const response = await fetch(`http://localhost:5000/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
      console.log('Usuário editado com sucesso');
      
      const updateUsers = users.map(user => {
        if (user.id === id) {
          return { id, ...profile }
        }
        return user
      })
      
      setUsers(updateUsers)
      router.push('/contact');
    } else {
      console.log('Erro ao editar usuário');
    }
  }

return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>

      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
      />

      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput 
        style={styles.input}
        value={avatar}
        onChangeText={setAvatar}
        placeholder="Avatar (URL)"
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Editar" color="#543DBB"
          onPress={handleEdit} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '90%',
    marginTop: 10,
  },
})

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSignup = async () => {
    const user = {
        name,
        email,
        pass,
        avatar
    }
    
    const response = await fetch('http://localhost:5000/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
      console.log('Usuário cadastrado com sucesso');
      router.push('/profile');
    } else {
      console.log('Erro ao cadastrar usuário');
    }
  }

return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

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
        value={pass}
        onChangeText={setPass}
        placeholder="Senha"
      />

      <TextInput 
        style={styles.input}
        value={avatar}
        onChangeText={setAvatar}
        placeholder="Avatar (URL)"
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Cadastrar" color="#543DBB"
          onPress={handleSignup} 
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

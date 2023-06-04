import React from 'react';
import {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createUser } from '../api/user.js'
import { useNavigation } from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../api/user.js'

const Signup = () => {

  const {refetch} = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const navigation = useNavigation();

  const cadastrar = async () =>{
    novoUser = {
      nome,
      email,
      endereco,
      telefone,
      senha: password,
    }
    try{
    await createUser(novoUser)
    refetch()
    navigation.navigate('Login')
    }catch{
      console.log("erro ao cadastrar usuário!")
    }
  }

  return (
    <View style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title} >Cadastro: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="exemplo@email.com"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="*********"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEndereco}
        value={endereco}
        placeholder="Rua exemplo, N 101, Bairro "
      />
      <TextInput
        style={styles.input}
        onChangeText={setTelefone}
        value={telefone}
        placeholder="XX XXXXX-XXXX"
      />
      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});


export default Signup;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getUsers } from '../api/user.js'
import { createUser } from '../api/user.js'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleLogin = async () => {
    const temUser = await data.results.find(user => { if (user.email === email && user.password === password) return user })
    if (temUser) {
      setEmail('')
      setPassword('')
      navigation.navigate('Home');
    } else {
      setEmail('')
      setPassword('')
      navigation.navigate('Login');
    }
  };

  const handleForgotPassword = () => {
    // Lógica para levar o usuário para a página de redefinição de senha
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <View style={styles.buttonView}><Button title="Entrar" onPress={handleLogin} /></View>
        <View style={styles.buttonView}><Button title="Sobre" onPress={handleLogin} /></View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp} onPress={handleSignUp}>Cadastre-se</Text>
        </TouchableOpacity>
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
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  signUp: {
    color: 'green',
    marginTop: 20,
  },
  buttonView: {
    marginBottom: 20,
  },
});

export default Login;
import React from 'react';
import {Text, StyleSheet, Linking, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button, Box } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import useUser from '../contexts/userContext';

const ConfirmarPedido = () => {
  const route = useRoute();
  const user = useUser(state => state.user);

  const handleEnviarPedido = () => {
    const numeroWhatsApp = '+5581991988963'; // Número de exemplo fornecido

    const mensagem = `Pedido: ${route.params.pizza_nome}\nValor: R$ ${route.params.pizza_valor}\n----------------------------------------------\nNome: ${user.nome}\nEmail: ${user.email}\nTelefone: ${user.telefone ?? "Insira seu telefone"}\nEndereco: ${user.endereco ?? "Insira seu endereço"}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url)
      .then(() => {
        console.log('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar a mensagem:', error);
        Alert.alert('Erro ao enviar a mensagem')
      });
  };

  return (
    <Box style={styles.container}>
      <Box alignItems='center' marginY='5'>
      <Text style={styles.title}>Pedido: </Text>
      <Text style={styles.text}> {route.params.pizza_nome} </Text>
      <Text style={styles.text}>Valor: R$ {route.params.pizza_valor} </Text>
      </Box>
      <Box alignItems='center' marginY='5'>
        <Text style={styles.user}>Nome: {user.nome} </Text>
        <Text style={styles.user}>Email: {user.email} </Text>
        <Text style={styles.user}>Telefone: {user.telefone ?? "Insira seu telefone"}</Text>
        <Text style={styles.user}>Endereco: {user.endereco ?? "Insira seu endereço"}</Text>
      </Box>
      <Box width='sm' height='md'>
      <Button bg='blue.900' _text={{color:'white', fontSize:'20', fontWeight:'bold'}} onPress={handleEnviarPedido}>Enviar Pedido</Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 30,
  },
  user: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default ConfirmarPedido;

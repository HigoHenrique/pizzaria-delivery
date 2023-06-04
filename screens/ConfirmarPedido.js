import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from 'native-base';
import useUser from '../contexts/userContext';

const ConfirmarPedido = () => {
  const route = useRoute();
  const user = useUser(state => state.user);

  const handleEnviarPedido = () => {
    const numeroWhatsApp = '+5581991988963'; // Número de exemplo fornecido

    const mensagem = `Pedido: ${route.params.pizza_nome}\nValor: R$ ${route.params.pizza_valor}\n----------------------------------------------\nNome: ${user.nome}\nEmail: ${user.email}\nTelefone: insira seu telefone\nEndereco: insira seu endereco`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url)
      .then(() => {
        console.log('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar a mensagem:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido: </Text>
      <Text style={styles.text}> {route.params.pizza_nome} </Text>
      <Text style={styles.text}>Valor: R$ {route.params.pizza_valor} </Text>
      <Text></Text>

      <View>
        <Text>Nome: {user.nome} </Text>
        <Text>Email: {user.email} </Text>
        <Text>Telefone: insira seu telefone</Text>
        <Text>Endereco: Insira seu Endereço</Text>
      </View>

      <Button onPress={handleEnviarPedido}>Enviar Pedido</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
  },
});

export default ConfirmarPedido;
